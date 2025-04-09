import React from 'react';

export const ListTask = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul className='listTask'>
      {tasks.map((task, index) => (
        <li className={`task ${task.completed ? 'completed' : ''}`} key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
          />
          <span>{task.title}</span>
          <p>{task.description}</p>
          <button className="deleteButton" onClick={() => deleteTask(index)}>Delete</button> 
        </li>
      ))}
    </ul>
  );
};