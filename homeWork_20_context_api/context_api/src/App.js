import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Tasks from './Components/Tasks';
import routes from './routes';
import { TaskContextProvider } from './TaskContext';

function App() {
  return (
    <TaskContextProvider>
      <RouterProvider router={createBrowserRouter(routes)}>
        <MainPage />
      </RouterProvider>
    </TaskContextProvider>
  );
}

export default App;