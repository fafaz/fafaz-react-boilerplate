// import files
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router/');
const app = express();

// utility functions
const getPath = (relativePath) => {
    return path.join(__dirname, relativePath);
}

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set static folder
console.log(getPath('../build/static/'));
app.use(express.static(getPath('../build/')));

// router
app.use(router);

// listen
const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log('running server on port ' + PORT));
