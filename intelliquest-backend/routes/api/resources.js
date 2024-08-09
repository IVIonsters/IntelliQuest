const express = require('express');
const router = express.Router();
const Resource = require('../../models/Resource');

// Get 6 random resources
router.get('/random', async (req, res) => {
  try {
    const resources = await Resource.aggregate([{ $sample: { size: 6 } }]);
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search resources by tags
router.get('/search', async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    console.log('Search Query:', query);  // Log the search query
    const resources = await Resource.find({ 
      tags: { $regex: query, $options: 'i' } 
    });
    console.log('Found Resources:', resources);  // Log the found resources
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit a new resource
router.post('/submit', async (req, res) => {
  const { title, description, url, thumbnail, type, tags } = req.body;

  // Validate the URL to ensure it's a YouTube link
  const youtubeUrlPattern = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  if (!youtubeUrlPattern.test(url)) {
    return res.status(400).json({ error: 'Invalid YouTube URL' });
  }

  const newResource = new Resource({
    title,
    description,
    url,
    thumbnail,
    type,
    tags
  });

  try {
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    res.status(500).json({ error: 'Error saving resource' });
  }
});

module.exports = router;
