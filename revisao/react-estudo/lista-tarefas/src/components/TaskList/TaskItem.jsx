import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

const TaskItem = ({ task, index, onEdit, onRemove }) => {
  const handleRemove = (e) => {
    e.preventDefault();
    onRemove(index); // Agora passando apenas o número do índice
  };

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(index); // Agora passando apenas o número do índice
  };

  return (
    <li>
      {task}
      <span>
        <FaEdit onClick={handleEdit} className="edit" />
        <FaWindowClose onClick={handleRemove} className="remove" />
      </span>
    </li>
  );
};

export default TaskItem;