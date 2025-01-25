import React, { useEffect, useState } from 'react';
import { fetchTasks } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const { data } = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h1>To-Do App</h1>
      <TaskForm refreshTasks={getTasks} />
      <TaskList tasks={tasks} refreshTasks={getTasks} />
    </div>
  );
};

export default App;
