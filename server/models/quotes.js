const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
  content: String,
  creator: String
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Quotes', QuoteSchema)
