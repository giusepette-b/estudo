import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

const TaskItem = ({ task, index, onEdit, onRemove }) => {
  const handleRemoveClick = (e) => {
    e.preventDefault();
    onRemove(index);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    onEdit(index); // Agora só passa o índice
  };

  return (
    <li>
      {task}
      <span>
        <FaEdit onClick={handleEditClick} className="edit" />
        <FaWindowClose onClick={handleRemoveClick} className="remove" />
      </span>
    </li>
  );
};

export default TaskItem;