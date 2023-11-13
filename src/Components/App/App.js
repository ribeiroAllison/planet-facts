import '../../Components/Global.css'
import Root from '../Root/Root'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import PlanetRender from '../PlanetRender/PlanetRender';
import PlanetInfo from '../PlanetRender/PlanetInfo';
import Galery from '../Galery/Galery';
import db from '../../Database/db.json'


function App() {

  const planets = db.planets

  const router = 
  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root />}>
      <Route index element={<Galery planets={planets}/>}/>
      <Route path=":planetURL"  element={<PlanetRender planets={planets}/>}>
        <Route index element={<PlanetInfo planets={planets}/>} end/>
        <Route path="structure" element={<PlanetInfo planets={planets}/>}/>
        <Route path="geology" element={<PlanetInfo planets={planets}/>}/>
      </Route>
    </Route>


  ))

  
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
