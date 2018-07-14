//file for /price related routes
const express = require('express');
const router = express.Router();

//routes for /price
router.get('/:pair?/:exchange?/:bidask?', function (req, res) {

  //function to standardize calls to api so code is more readable


  //general /price route
  if (!req.params.pair) {
    return res.json(currentPrices);
  } ///////////////end of general /price route


  //user specified pair but not an exchange
  else if (!req.params.exchange) {
    //very similar idea to /price route, look at comments on the if above this else if 
    //for explanations
    var resObj = {};
    var pair = req.params.pair; //pair user requested prices for

    for (var exchange in currentPrices) {
      if (currentPrices.hasOwnProperty(exchange)) {
        var exchangeObj = currentPrices[exchange];//grab exchange object from JSON of XRP API info
        if (exchangeObj.hasOwnProperty(pair)) {
          resObj[exchange] = {};
          resObj[exchange][pair] = exchangeObj[pair];
        }
      }
    }

    if (Object.keys(resObj).length > 0) return res.json(resObj)
    else return res.json({ status: 404, message: "pair not found" });

  } ///////////////end of general /price/pair route



  //user supplied specific pair and exchange
  else {
    var pair = req.params.pair;
    var exchange = req.params.exchange;

    var pairObj = currentPrices[exchange][pair];

    if (pairObj) {
      return res.json(pairObj);
    } 
    
    else {
      return res.json({
        status: 404,
        message: "Exchange or pair not found. call /api/price for a full list of exchanges and pairs."
      });
    }

  }///////////////end of specific /price/pair/exchange route


});

module.exports = {router: router};
