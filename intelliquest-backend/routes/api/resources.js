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

// Get all resources
module.exports = router;

