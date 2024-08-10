/* eslint-disable no-undef */
// routes/api/flipcards.js
const express = require('express');
const router = express.Router();
const flipcards = require('../../data/flipcards.json');

// @route GET api/flipcards
// @desc Get all flipcards
// @access Public
router.get('/', (req, res) => {
  res.json(flipcards);
});

module.exports = router;
