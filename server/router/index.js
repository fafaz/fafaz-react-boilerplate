const express = require('express');
const router = express.Router();

const path = require('path');

// routers
// const login = require('./login/');

// utility functions
const getPath = (relativePath) => {
    return path.join(__dirname, relativePath);
}

router.get('/', (req, res)=> {
    res.sendFile(getPath('../../build/index.html'));
});

module.exports = router;
