const router = express.Router();
const usersController = require("../../controllers/usercontroller");

// Matches with "/api/users"
router.route("/")
  .get(usercontroller.findAll)
  .post(usercontroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(usercontroller.findById)
  .put(usercontroller.update)
  .delete(usercontroller.remove);

module.exports = router;