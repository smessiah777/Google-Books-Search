const path = require("path");
const router = require("express").Router();
const bookController = require("./../controllers/bookController");

router.route("/api/books").get(bookController.allBooks);

router.route("/api/books").post(bookController.newBook);

router.route("/api/books/:id").delete(bookController.remove);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
