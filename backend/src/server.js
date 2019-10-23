const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = 3333;
const app = express();


//DB CONNECTION
mongoose.connect('mongodb+srv://flityzz:redbull123@cluster0-xqdub.mongodb.net/crud?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () =>{
    console.log('server open');
    console.log(`port: ${port}`);
});