const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book routes
router.use("/books", bookRoutes);

// Google Books external API route
router.use("/google", googleRoutes)

module.exports = router;
