import React from 'react';
import './TaskItem.css';
import { deleteTask, updateTask } from '../api';

const TaskItem = ({ task, refreshTasks }) => {
  const toggleComplete = async () => {
    await updateTask(task._id, { completed: !task.completed });
    refreshTasks();
  };

  const removeTask = async () => {
    await deleteTask(task._id);
    refreshTasks();
  };

  return (
    <div className="task-card">
      <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
      <p>{task.description}</p>
      <div className="button-group">
        <button className="complete-btn" onClick={toggleComplete}>
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button className="delete-btn" onClick={removeTask}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
