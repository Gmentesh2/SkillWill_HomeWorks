
import React from 'react';
import {createBrowserRouter, Route, RouterProvider,  } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div >
      <RouterProviderer router = {createBrowserRouter(router)} />
     
    </div>
  );
}

export default App;