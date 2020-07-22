const express = require("express");
//
const {
  taskList,
  addTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskControllers");

const router = express.Router();

router.get("/", taskList);

router.post("/", addTask);

router.put("/:taskId", updateTask);

router.put("/delete/:taskId", deleteTask);

module.exports = router;
