const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


