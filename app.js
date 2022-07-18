const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

const routes = require('./src/routes/routes');
app.use('/api', routes);

app.listen( PORT, () => console.log('Server running in port ', PORT));

