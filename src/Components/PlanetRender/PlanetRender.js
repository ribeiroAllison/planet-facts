import { Outlet } from "react-router-dom"
import '../../Components/Global.css'
import { data } from "../../data"
import { usePathname, eraseSlash } from '../assets/functions';

export default function PlanetCompiler () {
    const path = usePathname();

    const targetPlanet = eraseSlash(path)

    const planet = data[targetPlanet]
    
    return(
        <div>
            <main>
                <Outlet />
            </main>
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