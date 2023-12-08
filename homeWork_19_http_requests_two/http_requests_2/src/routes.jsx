import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskAdder from './Components/TaskAdder';
import TaskEditor from './Components/TaskEditor';
import Tasks from './Components/Tasks';
import MainPage from './Components/MainPage';

const routes = [
      {element: <MainPage />, path: '/', children: [
       {element: <Tasks />, index: true},
       { element: <TaskAdder />, path: 'add' },
       { element: <TaskEditor />, path: 'edit/:id' }
      ]},
       

 
];

export default routes;