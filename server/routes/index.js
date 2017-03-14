var express = require('express')
var router = express.Router()
const quoteController = require('../controllers/quotes')

/* GET home page. */
router.get('/', quoteController.getQuotes)

router.post('/create', quoteController.createQuote)

router.put('/update/:id', quoteController.updateQuote)

router.delete('/delete/:id', QuoteCquoteControllerontroller.deleteQuote)

module.exports = router
