import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useLanguageContext } from "../Contexts/LanguageContext";
import { getSpecifiedTask, getTasks, putTask } from "../store/todo/todo.thunks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";


const TaskEditor: React.FC = () => {
  const { languages, language, georgian, english } = useLanguageContext();
  const { id } = useParams();
  const [task, setTask] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [owner, setOwner] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');
  const dispatch = useDispatch();
  const {mode} = useSelector((state: RootState) => state.darkMode)

  const url = `/api/v1/taskList/${id}`;
  const { specifiedloading, specifiedTask, putloading, error } = useAppSelector((state) => state.todo);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSpecifiedTask(url));
   
      setTask(specifiedTask.task);
      setChecked(specifiedTask.checked);
      setOwner(specifiedTask.owner);
      setDeadline(specifiedTask.deadline);
    
  }, [specifiedTask]);

  console.log(specifiedTask);

  const onFormSubmit = () => {
    dispatch(putTask({ task, checked, owner, deadline, url }))
      .then(action => {
        if (action.payload) {
          navigate('/');
        } else {
          console.log("Error:", action.error);
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        navigate('/')
        })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <div className={mode === 'light' ? 'light-mode' : 'dark-mode'} >
      <form onSubmit={onSubmit}>
        <p>{language === 'GE' ? georgian.taskItemNaming : english.taskItemNaming}</p>
        <input type='text'  value={task} placeholder={task} onChange={(e) => setTask(e.target.value)} />
        <p>{language === 'GE' ? georgian.owner : english.owner}</p>
        <input type='text' value={owner} placeholder={owner} onChange={(e) => setOwner(e.target.value)} />
        <p>{language === 'GE' ? georgian.deadline : english.deadline}</p>
        <input type='text' value={deadline} defaultValue={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <label>
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          {language === 'GE' ? georgian.markAsCompleted : english.markAsCompleted}
        </label>
        <button type='submit'>{language === 'GE' ? georgian.editTask : english.editTask}</button>
      </form>
    </div>
  );
};

export default TaskEditor;
