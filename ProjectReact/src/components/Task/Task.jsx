import React, { useState } from 'react';
import { Containertask } from '../Containertask/Containertask';
import { ListTask } from '../ListTask/ListTask';  
import { FilterTask } from '../FilterTask/FilterTask';

export const Task = () => {
  const [tasks, setTasks] = useState([]); 
  const [filteredTasks, setFilteredTasks] = useState([]);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, { ...newTask, completed: false }];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); 
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); 
  };

  const toggleTaskCompletion = (indexToToggle) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); 
  };

  return (
    <div className='containerTask'>
      <h1>To-Do List</h1>
      <Containertask addTask={addTask} />
  
      <FilterTask tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <ListTask tasks={filteredTasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} /> 
    </div>
  );
};