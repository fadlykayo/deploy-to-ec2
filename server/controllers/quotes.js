const Quotes = require('../models/Quotes')

module.exports = {
  getQuotes: (req, res) => {
    Quotes.find().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  getQuote: (req, res) => {
    Quotes.findOne({
      _id: req.params.id
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  createQuote: (req, res) => {
    Quotes.create({
      content: req.body.content,
      creator: req.body.creator
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  updateQuote: (req, res) => {
    Quotes.findOneAndUpdate({
      _id: req.params.id
    }, {content: req.body.content, creator: req.body.creator}, {
      new: true
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  deleteQuote: (req, res) => {
    Quotes.findOneAndRemove({
      _id: req.params.id
    }).then(function (data) {
      if(data.length === 0) {
        res.send({message: `Deleted quote with ID ${req.params.id}`})
      }
    }).catch(function (err) {
      res.send(err)
    })
  }
}
