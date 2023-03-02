import './App.css';
import '../../Components/Global.css'
import Root from '../Root/Root'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import PlanetRender from '../PlanetRender/PlanetRender';
import PlanetInfo from '../PlanetRender/PlanetInfo';
import PlanetStructure from '../PlanetRender/PlanetStructure';

import React from 'react';

function App() {

  const router = 
  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root />}>
      {/* <Route index element={<PlanetInfo />}/> */}
      <Route path="mercury"  element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
        <Route path="structure" element={<PlanetStructure />}/>
      </Route>
      <Route path="venus" element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
        <Route path="structure" element={<PlanetStructure />}/>
      </Route>
      <Route path="earth" element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
        <Route path="structure" element={<PlanetStructure />}/>
      </Route>
      <Route path="mars" element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
        <Route path="structure" element={<PlanetStructure />}/>
      </Route>
      <Route path="jupiter" element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
        <Route path="structure" element={<PlanetStructure />}/>
      </Route>
      <Route path="saturn" element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
        <Route path="structure" element={<PlanetStructure />}/>
      </Route>
      <Route path="uranus" element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
        <Route path="structure" element={<PlanetStructure />}/>
      </Route>
      <Route path="neptune" element={<PlanetRender />}>
        <Route index element={<PlanetInfo />}/>
        <Route path="structure" element={<PlanetStructure />}/>
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
