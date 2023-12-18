import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);


  return (
    <TaskContext.Provider value={{ taskList, setTaskList}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};