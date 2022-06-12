const express = require("express");
const router = express.Router();
const { getMe, registerUser, loginUser } = require("../controllers/user");
const { protect } = require("../middleware/auth");

// Sinc the route for GET & POST are the same we can clean the code up ^
// Better way if the route is the same but method is deff =>
router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(protect, getMe); // use protect function to protect if there is no Token

// =======
// Old way
// =======
// router.get("/", getUsers);
// router.post("/", setUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;
