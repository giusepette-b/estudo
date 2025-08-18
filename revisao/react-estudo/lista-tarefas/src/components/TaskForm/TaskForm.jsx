import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './TaskForm.css';

const TaskForm = ({ inputValue, setInputValue, onAddTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onAddTask(inputValue);
    if (success) {
      setInputValue('');
    } else {
      alert('Tarefa já existe ou está vazia!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default TaskForm;