import '../../Components/Global.css'
import Root from '../Root/Root'
import { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { baseURL } from '../../utils/baseURL';
import PlanetRender from '../PlanetRender/PlanetRender';
import PlanetInfo from '../PlanetRender/PlanetInfo';
import Galery from '../Galery/Galery';


import React from 'react';

function App() {

  const [planets, setPlanets] = useState()
  const fetchPlanets = async () =>{
    const response = await fetch(baseURL);
    if(response.ok){
      const jsonResponse = await response.json();
      setPlanets(jsonResponse);
    }
  }

  useEffect(() =>{
    fetchPlanets();
  }, []);

  const findPlanetData = (planetName) =>{
    return planets.find(planet => planet.name.toLowerCase() === planetName.toLowerCase());
  }

  const router = 
  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root />}>
      <Route index element={<Galery />}/>
      <Route path=":planetURL"  element={<PlanetRender planets={planets}/>}>
        <Route index element={<PlanetInfo planets={planets}/>} end/>
        <Route path="structure" element={<PlanetInfo planets={planets}/>}/>
        <Route path="geology" element={<PlanetInfo planets={planets}/>}/>
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
