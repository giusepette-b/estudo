import React from 'react';
import { useTasks } from './hooks/useTask';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskCounter from './components/TaskCounter/TaskCounter';
import './App.css';

const App = () => {
  const {
    tasks,
    inputValue,
    setInputValue,
    addTask,
    editTask,
    removeTask
  } = useTasks();

  const handleEdit = (e, index) => {
    e.preventDefault();
    const newTask = prompt('Editar tarefa:', tasks[index]);
    if (newTask) editTask(index, newTask);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <TaskForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTask={addTask}
      />
      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onRemove={removeTask}
      />
      <TaskCounter count={tasks.length} />
    </div>
  );
};

export default App;