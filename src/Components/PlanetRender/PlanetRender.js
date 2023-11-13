import { Outlet, useParams } from "react-router-dom"
import '../../Components/Global.css'
import findPlanetData from "../../utils/findPlanetData"
import Footer from "../Footer/Footer"

export default function PlanetCompiler (props) {

    const planetsArray = props.planets;
    const {planetURL} = useParams();
    const planet = findPlanetData(planetURL, planetsArray);
    

    
    return(
        <>
            <main>
                <Outlet/>
            </main>
            {/* All the info here comes from array of objects got from server, planet name is 
            defined by usePathname custom hook and getPlanetFromURL function */}
            <Footer planet={planet}/>
        </>
    )
}