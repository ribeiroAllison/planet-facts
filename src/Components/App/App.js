import './App.css';
import '../../Components/Global.css'
import Root from '../Root/Root'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Mercury from '../Mercury/Mercury';

import React from 'react';

function App() {

  const router = 
  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root />}>
      <Route path="mercury"  element={<Mercury />}>

      </Route>
    </Route>


  ))

  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
