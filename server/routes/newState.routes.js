const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const newState = require('../controllers/new-state.controller');

router.post('/api/usuarios', newState.createState);