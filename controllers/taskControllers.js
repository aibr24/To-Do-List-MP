let tasks = [
  { name: "Placeholder Task", id: 1, done: false },
  { name: "hoohoo", id: 2, done: false },
];
let idCounter = tasks.length + 1;

exports.taskList = (req, res) => {
  res.json(tasks);
};

exports.updateTask = (req, res) => {
  const foundTask = tasks.find((tasks) => tasks.id === +req.params.taskId);

  if (foundTask) {
    foundTask.done = !foundTask.done;
    // tasks = tasks.filter((task) => task.id !== foundTask.id);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.addTask = (req, res) => {
  const id = idCounter;
  const done = false;
  idCounter++;

  const newTask = { ...req.body, id, done };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
  const foundTask = tasks.find((tasks) => tasks.id === +req.params.taskId);

  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== foundTask.id);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};
