const router = require('express').Router();
const axios = require('axios');

// Matches with "/api/:title"
router.route("/:title")
  .get(function(req,res) {
    let URL = "https://www.googleapis.com/books/v1/volumes?q=" +
      req.params.title + 
      "&printType=books&maxResults=20&key=" +
      process.env.BOOKS_KEY;
    axios.get(URL)
      .then(response => res.json(response.data))
      .catch(err => res.json(err));
  })

module.exports = router;

