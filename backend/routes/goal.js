const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goal");

const { protect } = require("../middleware/auth");

// Better way if the route is the same but method is deff =>
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

// ===========
// Sinc the route for GET & POST are the same we can clean the code up ^
// ===========
// router.get("/", getGoals);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;
