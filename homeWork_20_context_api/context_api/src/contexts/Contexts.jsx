import React, { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const LanguageContextProvider = ({children}) => {

  const [language, setLanguage] = useState('GE');

const contextValue = useMemo(() => ({
  
  languages: ['GE', 'EN'],
  georgian: {
  header: 'დავალებები',
  addNewTask: 'დაამატე დავალება',
  taskItemNaming: 'დავალება:',
  owner: 'მფლობელი',
  deadline: 'შესრულების ვადა',
  completed: 'შესრულებულია',
  editTask: 'დავალების კორექტირება',
  delete: 'დავალების წაშლა',
  backToTasks: 'მთავარ გვერდზე დაბრუნება',
  enterTask: 'შეიყვანე დავალება',
  enterOwner: 'შეიყვანე მფლობელი',
  enterDeadline: 'შეიყვანე ვადა',
  markAsCompleted: 'დასრულებულად მონიშვნა',
  loading: 'იტვირთება...',
  error: 'მოხდა შეცდომა'
    },

  english: {
  header: 'Tasks',
  addNewTask: 'Add new task',
  taskItemNaming: 'Task:',
  owner: 'Owner',
  deadline: 'Deadline',
  completed: 'Completed',
  editTask: 'Edit task',
  delete: 'Delete',
  backToTasks: 'Back to tasklist',
  enterTask: 'Enter task',
  enterOwner: 'Enter owner',
  enterDeadline: 'Enter deadline',
  markAsCompleted: 'Mark as completed',
  loading: 'loading...',
  error: 'error'
  },

  language: language,
  setLanguage: setLanguage

}), [language, setLanguage]);

return(
<LanguageContext.Provider value={contextValue}> 
{children}
  </LanguageContext.Provider> )
}

export const useLanguageContext = () => {
  const contextValue = useContext(LanguageContext);
  if(!contextValue) throw new Error('Component is outside context')
  return contextValue
}


export default LanguageContextProvider;