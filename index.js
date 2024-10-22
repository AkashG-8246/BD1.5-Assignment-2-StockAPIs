const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

// API Call: <http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2>
// Expected Output: 200

app.get('/calculate-returns', (req, res) => {
  let boughtPrice = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  res.send(calculateReturns(boughtPrice, marketPrice, quantity).toString());
});

function calculateReturns(boughtPrice, marketPrice, quantity) {
  return (marketPrice - boughtPrice) * quantity;
}

// API Call: <http://localhost:3000/total-returns?stock1=100&stock2=200&stock3=200&stock4=400>
// Expected Output: 900
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(totalReturns(stock1, stock2, stock3, stock4).toString());
});

function totalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

// API Call: <http://localhost:3000/calculate-return-percentage?boughtAt=400&returns=200>
// Expected Output: 50
app.get('/calculate-return-percentage', (req, res) => {
  let boughtPrice = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  res.send(calculateReturnsPercentage(boughtPrice, returns).toString());
});

function calculateReturnsPercentage(boughtPrice, returns) {
  return ((marketPrice - boughtPrice) / boughtPrice) * 100;
}

// API Call: <http://localhost:3000/total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40>
// Expected Output: 90

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(totalReturnsercentage(stock1, stock2, stock3, stock4).toString());
});

function totalReturnsercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

// API Call: <http://localhost:3000/status?returnPercentage=90>
// Expected Output: profit
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);


  res.send(calculateReturnType(returnPercentage).toString());
});

function calculateReturnType(returnPercentage) {
  if (returnPercentage > 0) {
    return 'profit'
  } else {
    return 'loss'
  }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
