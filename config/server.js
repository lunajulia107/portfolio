const express = require('express'); 
const consig = require('consign');
const bodyParser = require('body-parser'); 

const app = express(); 

app.set('view engine', 'ejs');
app.set('views', './app/views');  

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
    limit:'50mb',
    extended: true
}));

consig()
    .include('app/routes')  
    .into(app);  

module.exports = app;  