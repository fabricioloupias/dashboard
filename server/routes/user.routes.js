const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


const users = require('../controllers/user.controller');

router.get('/api/usuarios', users.getUsers);
router.post('/api/usuarios', users.createUser);
router.get('/api/usuarios/:id', users.getUser);
router.put('/api/usuarios/:id', users.editUser);
router.delete('/api/usuarios/:id', users.deleteUser);




router.post('/login', users.login);

router.get('/protected', ensureToken ,  (req, res) => {
     jwt.verify(req.token, 'secret_token', (err, data) => {
        if(err){
            res.status(403)
        }else{
            res.json({
                text:'protegido',
                data
            })
        }
    })
})

function ensureToken(req, res, next){
    const  bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}



module.exports = router;