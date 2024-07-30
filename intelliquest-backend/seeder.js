// seeder.js
require('dotenv').config();
const mongoose = require('mongoose');
const Resource = require('./models/Resource');

const resources = [
  {
    title: 'React Crash Course',
    description: 'Basics of React, such as components, props, state, and hooks.',
    url: 'https://www.youtube.com/watch?v=LDB4uaJ87e0&t=2592s',
    thumbnail: 'https://img.youtube.com/vi/LDB4uaJ87e0/hqdefault.jpg', // Example thumbnail
    type: 'video',
    tags: ['sample', 'video'],
  },
  {
    title: 'Traversy Media',
    url: 'https://www.youtube.com/@TraversyMedia',
    type: 'channel',
    tags: ['youtube', 'channel', 'traversy'],
  },
  // Add more resources here following the same structure
];

const seedResources = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Resource.insertMany(resources);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

seedResources();



