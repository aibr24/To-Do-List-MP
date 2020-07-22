const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", taskRoutes);

// let tasks = [
//   { name: "Placeholder Task", id: 1 },
//   { name: "hoohoo", id: 2 },
// ];
// let idCounter = tasks.length + 1;

// app.get("/", (req, res) => {
//   res.json(tasks);
// });

// app.put("/", (req, res) => {
//   foundTask = tasks.find((tasks) => tasks.id === req.body.id);

//   if (foundTask) {
//     tasks = tasks.filter((task) => task.id !== foundTask.id);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Task not found" });
//   }
// });

// app.post("/", (req, res) => {
//   const id = idCounter;
//   idCounter++;

//   const newTask = { ...req.body, id };

//   tasks.push(newTask);

//   res.status(201).json(newTask);
// });

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
