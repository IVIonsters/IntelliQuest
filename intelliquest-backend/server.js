const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const resourceRoutes = require('./routes/api/resources');
const authRoutes = require('./routes/api/auth'); // Import authRoutes
const session = require('express-session');
const passport = require('./config/passport');
const axios = require('axios');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // For form submissions

// Passport Initialize
app.use(passport.initialize());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/resources', resourceRoutes);
app.use('/api/auth', authRoutes); // Use authRoutes

// Set your OpenAI API key
const apiKey = process.env.OPENAI_API_KEY; // Store your API key in the .env file

// Route to generate a quiz
app.post('/generate_quiz', async (req, res) => {
  const topic = req.body.topic;

  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    {
      role: 'user',
      content: `Generate a 5-question multiple-choice quiz on the topic of ${topic}. The response should be a JSON object with the following format: {"quiz": [{"question": "Question text?", "options": ["Option A", "Option B", "Option C", "Option D"], "answer": "Correct Option"}]}`
    }
  ];

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 500,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const quiz = JSON.parse(response.data.choices[0].message.content.trim());

    res.json(quiz);
  } catch (error) {
    console.error('Error generating quiz:', error.response ? error.response.data : error.message);
    res.status(500).send('Error generating quiz');
  }
});

// Route to optimize code
app.post('/optimize', async (req, res) => {
  const code = req.body.code;
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  };
  const data = {
    'model': 'gpt-3.5-turbo',
    'messages': [
      {
        'role': 'system',
        'content': 'You are a helpful assistant.'
      },
      {
        'role': 'user',
        'content': `Optimize the following code and explain the steps taken to optimize it:\n\n${code}`
      }
    ],
    'max_tokens': 1000,
    'temperature': 0.5
  };

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', data, { headers });
    const responseData = response.data;
    const optimizedText = responseData.choices[0].message.content.trim();
    const [optimizedCode, ...stepsArray] = optimizedText.split('\n\n');
    const steps = stepsArray.join('\n\n');

    res.json({ optimized_code: optimizedCode, steps: steps });
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error optimizing code' });
  }
});

// Route to handle resource submissions
app.post('/api/resources/submit', async (req, res) => {
  const { title, description, url, thumbnail, type, tags } = req.body;

  // Create a new resource document
  const newResource = new Resource({
    title,
    description,
    url,
    thumbnail,
    type,
    tags
  });

  try {
    // Save the resource to the database
    await newResource.save();
    res.status(201).json({ message: 'Resource submitted successfully', resource: newResource });
  } catch (error) {
    console.error('Error submitting resource:', error.message);
    res.status(500).json({ error: 'Error submitting resource' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
