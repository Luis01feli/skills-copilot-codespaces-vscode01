// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import routes
const comments = require('./routes/comments');

// Create an express app
const app = express();

// Setup middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

// Setup routes
app.use('/comments', comments);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});