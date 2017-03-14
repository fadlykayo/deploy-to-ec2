var express = require('express')
var router = express.Router()
const quoteController = require('../controllers/quotes')

// API

router.get('/api', function (req, res, next) {
  res.send({
    endpoints: [
      '/api/quote',
      '/api/quote/:id'
    ]
  })
})

router.get('/api/quote', quoteController.getQuotes)

router.post('/api/quote', quoteController.createQuote)

router.put('/api/quote/:id', quoteController.updateQuote)

router.delete('/api/quote/:id', quoteController.deleteQuote)

module.exports = router
