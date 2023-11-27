import React from 'react';
import DoneList from './components/Donelist';
import Backlog from './components/Backlog';
import InProgress from './components/InProgress';
import { useState, useCallback } from 'react';
import {MainContainer, TaskContainer, GlobalStyle} from './styled';



function App()  {
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

 
  

    return (
      <>
      <GlobalStyle />
      <MainContainer>
        <Backlog
         
          setInProgressTasks = {setInProgressTasks}
          backlogTasks = {backlogTasks}
          setBacklogTasks = {setBacklogTasks}
          setDoneTasks = {setDoneTasks}
          
        />
         <InProgress   
  InProgressTasks = {InProgressTasks}
  setInProgressTasks = {setInProgressTasks}
  setBacklogTasks = {setBacklogTasks}
  setDoneTasks = {setDoneTasks} />
        <DoneList
  doneTasks = {doneTasks}
  setInProgressTasks = {setInProgressTasks}
  setBacklogTasks = {setBacklogTasks}
  setDoneTasks = {setDoneTasks}
        /> 
      </MainContainer>
      </>
    );
  
}

export default App;