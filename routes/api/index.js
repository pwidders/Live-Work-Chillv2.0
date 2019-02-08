const router = require("express").Router();
const userRoutes = require("./users");
const rentDataRoutes = require("./rentData");
const authRoutes = require("./auth");

// // Routes - Import our auth.js file
// var authRoute = require('../../')(app,passport); // Added passport as an argument to pass its functionality to auth.js

// User data routes
router.use("/api/user", userRoutes);

// // Zillow data routes
// router.use("/api/rentdata", rentDataRoutes);

// Auth data routes
router.use("/api/auth", authRoutes);

module.exports = router;
