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

// Search resources by title or tags
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const regex = new RegExp(q, 'i');
    const resources = await Resource.find({
      $or: [
        { title: { $regex: regex } },
        { tags: { $regex: regex } }
      ]
    });

    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


