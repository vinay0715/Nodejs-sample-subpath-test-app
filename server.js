// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World! You have reached home page of the server');
});

app.get('/health',(req,res)=>{
res.send("Yes I am healthy! You have reached my health probe");
});

app.get('/foo',(req,res)=>{
res.send("Wow it worked too! You have reached foo endpoint");
});
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
