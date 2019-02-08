const router = require("express").Router();

// Matches with "/api/users"
router.route("/api/user")
  //.get(booksController.findAll)
  .post(()=>console.log("banana"));

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
