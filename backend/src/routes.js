const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//WELCOME
routes.get('/', (req, res) =>{
    return res.send("bem vindo ao backend");
});


//SESSIONS
routes.post('/session', SessionController.store);
routes.get('/session', SessionController.index);
routes.get('/session/:_id', SessionController.show);
routes.delete('/session', SessionController.delete);
routes.put('/session/:_id', SessionController.update);

module.exports = routes;