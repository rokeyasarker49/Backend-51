const express = require('express');
const products = require('./product.json');
const cors = require('cors');
const app = express();
const port = 2000;


app.use(cors());



app.get('/', (request, response) => {

  response.send('Learn-Server-01');

})

app.get('/products', (request, response) => {

  response.send(products);

})

app.get('/products/:id', (request, response) => {

  const id = request.params.id;
  const sProduct = products.find(product => product.id === id);
  response.send(sProduct);

})

app.listen(port, () => {

  console.log(`This app listening on ${port}`);
  
})