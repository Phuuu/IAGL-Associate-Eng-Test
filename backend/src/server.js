const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  // Created a POST endpoint that adds a todo and returns the updated list
  server.post('/api/todo', async (req, res) => {
    const { task } = req.body;
  
    if (!task) {
      return res.status(400).json({ message: "Please add a task" });
    }
  
    try {
      const updatedTodos = await todoService.addTodo(task);
      res.status(201).json(updatedTodos);
    } catch (err) {
      console.error("Error adding todo:", err); // Logging the error to help debugging
      res.status(500).json({ message: "Error adding todo", error: err.message }); // More detailed error message
    }
  });
  

  return server;
};
module.exports = server;