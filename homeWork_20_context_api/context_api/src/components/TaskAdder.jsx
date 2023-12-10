import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../TaskContext';
import useRequest from '../hooks/UseRequest';
import { useLanguageContext } from "../Contexts/LanguageContext";


const TaskAdder = () => {
  const {language, georgian, english } = useLanguageContext();
  const [checked, setChecked] = useState(false);
  const [task, setTask] = useState('');
  const [owner, setOwner] = useState('');
  const [deadline, setDeadline] = useState('');
  const navigate = useNavigate();
  const url = '/api/v1/taskList';
      
  const {sendRequest} = useRequest({url: url, method: 'POST'});

  const onFormSubmit = () => {

    sendRequest([{owner, deadline, task, checked }]).then(() => navigate('/'))
    .catch(err => console.log(err));
    
  };


  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <div>
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