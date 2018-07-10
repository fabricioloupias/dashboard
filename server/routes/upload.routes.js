const express = require('express');
const router = express.Router();

const uploads = require('../controllers/uploads.controller');

router.post('/api/uploads/image', uploads.uploadImage)


module.exports = router;