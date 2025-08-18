import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onEdit, onRemove }) => (
  <ul className="task-list">
    {tasks.map((task, index) => (
      <TaskItem
        key={index}
        task={task}
        index={index}
        onEdit={onEdit}
        onRemove={onRemove}
      />
    ))}
  </ul>
);

export default TaskList;