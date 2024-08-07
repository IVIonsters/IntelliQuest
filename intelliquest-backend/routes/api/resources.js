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

  try {
    const newResource = new Resource({
      title,
      description,
      url,
      thumbnail,
      type,
      tags
    });

    await newResource.save();
    res.status(201).json({ message: 'Resource submitted successfully!' });
  } catch (error) {
    console.error('Error submitting resource:', error);
    res.status(500).json({ error: 'Error submitting resource' });
  }
});

module.exports = router;
