import {createContext, useState} from 'react'
export const context = createContext();

export const Provider = ({ children }) => { 
  
      const [tasks, setTasks] = useState([]);
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState(''); 

      return (
        <context.Provider value={{tasks, setTasks, title, setTitle, description, setDescription}}>
            {children}
        </context.Provider>
      )
}



