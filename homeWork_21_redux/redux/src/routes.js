import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskAdder from './Components/TaskAdder';
import DoneTasks from './Components/DoneTasks';
import Tasks from './Components/Tasks';
import Header from './Components/Header'

const routes = [
      {
        element: (
          <div>
              <Header />
              <Outlet />
          </div>
        ),
        path: '/',
        children: [
          { element: <Tasks />, path: 'tasks' },
          { element: <TaskAdder />, path: 'add' },
          { element: <DoneTasks />, path: 'done' }
        ]
      }
    ];

export default routes;