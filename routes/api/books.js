const router = require("express").Router();
const booksController = require("../../controller/bookController");

// Matches with "/api/books"
router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/books/:id")
  .delete(booksController.remove);

module.exports = router;