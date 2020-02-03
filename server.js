const express = require('express');
const app = express();


const hbs = require('hbs');

require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ));

//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

  res.render('home', {
  	nombre: 'josue',
  });

 });

app.get('/about', (req, res) => {

  res.render('about', {

  });

 });

app.listen(port, ()=>{
	console.log(`escuchando peticiones en el puerto ${port}`)
});