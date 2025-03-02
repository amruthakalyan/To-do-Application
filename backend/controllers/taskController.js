const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    try {
      const task = new Task(req.body);
      const savedTask = await task.save();
      res.status(201).json(savedTask);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.getTaskById = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.updateTask = async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.deleteTask = async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };