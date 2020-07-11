const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks",
  { useNewUrlParser: true,
    useUnifiedTopology: true }
);

const bookSeed = [
  {
    title: "The Fellowship of the Ring",
    authors: ["J.R.R Tolkien"],
    description: "The first volume in J.R.R. Tolkien's epic adventure",
    image: "https://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE724KYHcfLje2-LXJJ0Djg4-eU9TH6nSbapO0zRVKvAktKw4w3BhYTtIo9Th97s4ogfRs4EaEaItn0vdgOBDWVDXlFecUwLYAaaf76S_pcIXz6de3X42uH9spbSKjz6POGws1GTR",
    link: "https://books.google.com/books/about/The_Fellowship_of_the_Ring.html?id=aWZzLPhY4o0C"
  },
  {
    title: "Slathbog's Gold",
    authors: ["Mark Forman"],
    description: "Do you have the courage, the wits, and the skill to claim a dragon's hoard? If so, apply within . . .",
    image: "data:image/jpg;base64,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",
    link: "https://www.google.com/books/edition/Slathbog_s_Gold/DIDlTgEACAAJ?hl=en"
  }
]

db.Book
  .deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
