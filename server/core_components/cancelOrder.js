const ccxt = require ('ccxt')
var {sleep, cancel, catchHead} = require('../../utils')
var fetchOpenOrder = require('./openOrders').fetchOpenOrder

const cancelOrder = async function(data) {
  var stockUpper = data.stock
  var stockName = stockUpper.toLowerCase()
  var symbol = data.symbol
  var id = data.id
  var _id = data._id
  var result = await cancel (stockName, id, symbol)
  await fetchOpenOrder(stockUpper, symbol, id, _id)
  return result
}

module.exports = cancelOrder
