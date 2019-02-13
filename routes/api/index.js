const router = express.Router()
const userRoutes = require("./users");

// User data routes
router.use("/users", userRoutes);

module.exports = router;
