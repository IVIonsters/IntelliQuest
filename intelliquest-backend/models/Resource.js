// models/Resource.js
const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  thumbnail: { type: String },
  type: { type: String, required: true, enum: ['video', 'channel', 'tutorial', 'lecture', 'website', 'programming', 'course', 'exercise', 'book', 'podcast', 'other'] },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resource', ResourceSchema);
