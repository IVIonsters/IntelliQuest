const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const resourceRoutes = require('./routes/api/resources');
const signupRoute = require('./controllers/authController');
const session = require('express-session');
const passport = require('./config/passport');
const bodyParser = require('body-parser');
const axios = require('axios');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Import routes
const users = require('./routes/api/users');

// Enable CORS
app.use(cors());

// Bodyparser Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Initialize
app.use(passport.initialize());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', users);
app.use('/api/resources', resourceRoutes);
app.use('/', signupRoute);

// Quiz generator route
const apiKey = process.env.OPENAI_API_KEY; // Store your API key in environment variables
const apiUrl = 'https://api.openai.com/v1/chat/completions';

app.post('/generate_quiz', async (req, res) => {
  const topic = req.body.topic;

  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: `Generate a 5-question multiple-choice quiz on the topic of ${topic}.` }
  ];

  try {
    const response = await axios.post(
      apiUrl,
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 300,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const quiz = response.data.choices[0].message.content.trim().split('\n').filter(line => line);

    res.json({ quiz });
  } catch (error) {
    console.error('Error generating quiz:', error.response ? error.response.data : error.message);
    res.status(500).send('Error generating quiz');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
