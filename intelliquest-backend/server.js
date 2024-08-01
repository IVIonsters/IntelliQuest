const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const resourceRoutes = require('./routes/api/resources');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Import routes
const users = require('./routes/api/users');

// Enable CORS
app.use(cors());

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', users);
app.use('/api/resources', resourceRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

