import React, { useState } from 'react';
import { createTask } from '../api';
import './TaskForm.css';  

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      await createTask({ title, description });
      refreshTasks();
      setTitle('');
      setDescription('');
    }
  };

  return (
   
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
   
  );
};

export default TaskForm;
