import { Outlet } from "react-router-dom"
import '../../Components/Global.css'
import { data } from "../../data"
import { usePathname, getPlanetFromURL } from '../assets/functions';

export default function PlanetCompiler (props) {
    // const path = usePathname();

    // const targetPlanet = getPlanetFromURL(path)

    // const planet = data[targetPlanet]
    const planet = props.planet
    
    return(
        <div>
            <main>
                <Outlet />
            </main>
            {/* All the info here comes from data.js array of objects, planet name is defined by usePathname custom hook and getPlanetFromURL function */}
            <footer className="footer">
                <div className="cards">
                    <p>ROTATION TIME</p>
                    <h3>{planet.rotation}</h3>
                </div>
                <div className="cards">
                    <p>REVOLUTION TIME</p>
                    <h3>{planet.revolution}</h3>
                </div>
                <div className="cards">
                    <p>RADIUS</p>
                    <h3>{planet.radius}</h3>
                </div>
                <div className="cards">
                    <p>AVERAGE TEMP</p>
                    <h3>{planet.temperature}</h3>
                </div>
            </footer>
        </div>
    )
}