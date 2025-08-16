const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");


app.use(express.json());
app.use(cors());

let tasks = [
  { id: 1, task: "to do homework" },
];

// GET /ping
app.get('/ping', (req, res) => {
  res.json({ message: "pong" });
});

// GET /tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks
app.post('/tasks', (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    task
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
