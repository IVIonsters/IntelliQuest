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

module.exports = router;
