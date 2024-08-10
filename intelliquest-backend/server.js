// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

// Check if JWT_SECRET is defined
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not defined");
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const resourceRoutes = require('./routes/api/resources');
const authRoutes = require('./routes/api/auth');
const session = require('express-session');
const passport = require('./config/passport');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const Resource = require('./models/Resource'); 

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
app.use('/api/auth', authRoutes);

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

// Serve static files for LearnBot
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser Middleware for LearnBot
app.use(bodyParser.json());

// LearnBot route
app.post('/chat', async (req, res) => {
    const userInput = req.body.message;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant named LearnBot.' },
                    { role: 'user', content: userInput }
                ],
                max_tokens: 150,
                temperature: 0.7,
                top_p: 1,
                n: 1
            })
        });

        const data = await response.json();
        console.log(data);

        if (data.choices && data.choices.length > 0) {
            const learnBotResponse = data.choices[0].message.content.trim();
            res.json({ response: learnBotResponse });
        } else {
            console.log('API response does not contain choices:', data);
            res.json({ response: 'Sorry, I could not understand that. Could you please rephrase?' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
