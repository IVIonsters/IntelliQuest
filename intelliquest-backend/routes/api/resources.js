// routes/api/resources.js
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

// Search resources by title, type, or tags
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const searchQuery = { 
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { type: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } }
      ] 
    };
    const resources = await Resource.find(searchQuery);
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

