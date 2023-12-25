import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskAdder from './Components/TaskAdder';
import TaskEditor from './Components/TaskEditor';
import Tasks from './Components/Tasks';
import MainPage from './Components/MainPage';
import LanguageContextProvider from './Contexts/LanguageContext';
import Header from './Components/Header'
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
      {
        element: (
          <div>
            <LanguageContextProvider>
              <Header />
              <Outlet />
            </LanguageContextProvider>
          </div>
        ),
        path: '/',
        children: [
          { element: <Tasks />, index: true },
          { element: <TaskAdder />, path: 'add' },
          { element: <TaskEditor />, path: 'edit/:id' }
        ]
      }
    ];

export default routes;