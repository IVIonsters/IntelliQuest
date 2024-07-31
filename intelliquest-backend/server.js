const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const DescopeClient = require('@descope/react-sdk');


// Load environment variables from .env file
dotenv.config();

const app = express();

// Import routes
const users = require('./routes/api/users');

// Enable CORS
app.use(cors());

// Bodyparser Middleware
app.use(express.json());

//Initialize Descope
 const descopeClient =  DescopeClient({
  projectId: 'P2jvuw8UpyL4xuQM9sDQeVSL48S9',
});

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



app.use(express.json());

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await descopeClient.auth.email.password.login(email, password);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Use Routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));



