import './App.css';
import '../../Components/Global.css'
import Root from '../Root/Root'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import PlanetRender from '../PlanetRender/PlanetRender';
import PlanetInfo from '../PlanetRender/PlanetInfo';

import React from 'react';

function App() {

  const router = 
  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root />}>
      <Route path="mercury"  element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
      </Route>
      <Route path="venus" element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
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
