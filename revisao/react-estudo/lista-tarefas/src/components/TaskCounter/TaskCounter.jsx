import React from 'react';
import './TaskCounter.css';

const TaskCounter = ({ count }) => (
  <p className="counter">Você tem {count} tarefas pendentes.</p>
);

export default TaskCounter;