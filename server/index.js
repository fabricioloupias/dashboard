const express = require('express');
const app = express();
const cors = require('cors');




const { mongoose } = require('./database');

//Function routes
const uploads = require('./controllers/uploads.controller');



//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors({origin: 'http://localhost:4200'}))

//Routes
app.use('/', require('./routes/user.routes'));
app.use('/', require('./routes/upload.routes'));

//Start server
app.listen(app.get('port'), () =>{
    console.log('Funciona')
})