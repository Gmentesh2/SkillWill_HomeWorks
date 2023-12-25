import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguageContext } from "../Contexts/LanguageContext";
import { postTask } from '../store/todo/todo.thunks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';


const TaskAdder: React.FC = () => {
  const {language, georgian, english } = useLanguageContext();
  const [checked, setChecked] = useState<boolean>(false);
  const [task, setTask] = useState<string>('');
  const [owner, setOwner] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');
  const navigate = useNavigate();
  const url = '/api/v1/taskList';
  const dispatch = useDispatch()
  const {mode} = useSelector((state: RootState) => state.darkMode)    
  const {error, postloading, lastPostedTask} = useSelector((state: RootState) => state.todo)

 const onFormSubmit = () => {
  dispatch(postTask({task,owner,checked,deadline,url}))
    .then((action) => {
      if (postTask.fulfilled.match(action)) {
        console.log(action.payload); // Access the fulfilled payload
        navigate('/');
      } else if (postTask.rejected.match(action)) {
        console.error(action.payload); // Handle rejection
      }
    });
};


  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();


  };

  if(error) return <div>
    {error}
    <Link to = {'/'}>{language === 'GE' ? georgian.backToTasks: english.backToTasks}</Link>
     </div>
  if(postloading) return <div>loading...</div>
  return (
    <div  className={mode === 'light' ? 'light-mode' : 'dark-mode'} >
      <Link to = {'/'}>{language === 'GE' ? georgian.backToTasks: english.backToTasks}</Link>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder= {language === 'GE' ? georgian.enterTask : english.enterTask}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type='text'
          placeholder={language === 'GE' ? georgian.enterOwner : english.enterOwner}
          onChange={(e) => setOwner(e.target.value)}
        />

        <input
          type='text'
          placeholder={language === 'GE' ? georgian.enterDeadline : english.enterDeadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
       
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          {language === 'GE' ? georgian.markAsCompleted : english.markAsCompleted}
        
        <button type='submit'>{language === 'GE' ? georgian.addNewTask : english.addNewTask}</button>
      </form>
    </div>
  );
};

export default TaskAdder;