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
      <Route path="mercury"  element={<PlanetRender planet={findPlanetData('mercury')}/>}>
        <Route index element={<PlanetInfo planet={findPlanetData('mercury')}/>} end/>
        <Route path="structure" element={<PlanetInfo planet={findPlanetData('mercury')}/>}/>
        <Route path="geology" element={<PlanetInfo planet={findPlanetData('mercury')}/>}/>
      </Route>
      <Route path="venus" element={<PlanetRender planet={findPlanetData('venus')}/>}>
        <Route index element={<PlanetInfo planet={findPlanetData('venus')}/>}/>
        <Route path="structure" element={<PlanetInfo planet={findPlanetData('venus')}/>}/>
        <Route path="geology" element={<PlanetInfo planet={findPlanetData('venus')}/>}/>
      </Route>
      <Route path="earth" element={<PlanetRender planet={findPlanetData('earth')}/>}>
        <Route index element={<PlanetInfo planet={findPlanetData('earth')}/>}/>
        <Route path="structure" element={<PlanetInfo planet={findPlanetData('earth')}/>}/>
        <Route path="geology" element={<PlanetInfo planet={findPlanetData('earth')}/>}/>
      </Route>
      <Route path="mars" element={<PlanetRender planet={findPlanetData('mars')}/>}>
        <Route index element={<PlanetInfo planet={findPlanetData('mars')}/>}/>
        <Route path="structure" element={<PlanetInfo planet={findPlanetData('mars')}/>}/>
        <Route path="geology" element={<PlanetInfo planet={findPlanetData('mars')}/>}/>
      </Route>
      <Route path="jupiter" element={<PlanetRender planet={findPlanetData('jupiter')}/>}>
        <Route index element={<PlanetInfo planet={findPlanetData('jupiter')}/>}/>
        <Route path="structure" element={<PlanetInfo planet={findPlanetData('jupiter')}/>}/>
        <Route path="geology" element={<PlanetInfo planet={findPlanetData('jupiter')}/>}/>
      </Route>
      <Route path="saturn" element={<PlanetRender planet={findPlanetData('saturn')}/>}>
        <Route index element={<PlanetInfo planet={findPlanetData('saturn')}/>}/>
        <Route path="structure" element={<PlanetInfo planet={findPlanetData('saturn')}/>}/>
        <Route path="geology" element={<PlanetInfo planet={findPlanetData('saturn')}/>}/>
      </Route>
      <Route path="uranus" element={<PlanetRender planet={findPlanetData('uranus')}/>}>
        <Route index element={<PlanetInfo planet={findPlanetData('uranus')}/>}/>
        <Route path="structure" element={<PlanetInfo planet={findPlanetData('uranus')}/>}/>
        <Route path="geology" element={<PlanetInfo planet={findPlanetData('uranus')}/>}/>
      </Route>
      <Route path="neptune" element={<PlanetRender planet={findPlanetData('neptune')}/>}>
        <Route index element={<PlanetInfo planet={findPlanetData('neptune')}/>}/>
        <Route path="structure" element={<PlanetInfo planet={findPlanetData('neptune')}/>}/>
        <Route path="geology" element={<PlanetInfo planet={findPlanetData('neptune')}/>}/>
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
