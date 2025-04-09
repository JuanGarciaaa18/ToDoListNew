import React, { useState } from 'react';

export const FilterTask = ({ tasks, setFilteredTasks }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    // Filtrar las tareas según el filtro seleccionado
    if (selectedFilter === 'all') {
      setFilteredTasks(tasks);
    } else if (selectedFilter === 'pending') {
      setFilteredTasks(tasks.filter(task => !task.completed));
    } else if (selectedFilter === 'completed') {
      setFilteredTasks(tasks.filter(task => task.completed));
    }
  };

  return (
    <div className='filterTask'>
      <label>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter === 'all'}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="pending"
          checked={filter === 'pending'}
          onChange={handleFilterChange}
        />
        Pending
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="completed"
          checked={filter === 'completed'}
          onChange={handleFilterChange}
        />
        Completed
      </label>
    </div>
  );
};
