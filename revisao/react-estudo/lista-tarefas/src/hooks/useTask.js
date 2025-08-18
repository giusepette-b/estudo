import { useState, useEffect } from 'react';
import { loadTasks, saveTasks } from '../services/taskStorage';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText.trim() === '' || tasks.includes(taskText)) {
      return false;
    }
    setTasks([...tasks, taskText]);
    return true;
  };

 const editTask = (index, newText) => {
  if (newText.trim() === '' || tasks.includes(newText)) {
    return false;
  }
  const updatedTasks = tasks.map((task, i) => 
    i === index ? newText : task
  );
  setTasks(updatedTasks);
  return true;
};

const removeTask = (index) => {
  setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  console.log(`Tarefa removida: ${index}`);
};

  return {
    tasks,
    inputValue,
    setInputValue,
    addTask,
    editTask,
    removeTask
  };
};