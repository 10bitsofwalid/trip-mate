const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT || 5000, () => console.log('Server running')))
.catch(err => console.log(err));