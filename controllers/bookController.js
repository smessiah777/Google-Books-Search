const db = require("../models");

module.exports = {
  allBooks: function(req, res) {
    db.Book.find(req.query)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  newBook: function(req, res) {
    db.Book.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
