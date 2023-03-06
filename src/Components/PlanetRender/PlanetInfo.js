import '../../Components/Global.css';
import { data } from '../../data';
import { usePathname, getPlanetFromURL, endPoint } from '../assets/functions';
import Buttons from './Buttons';

export default function PlanetInfo (){

    
    const path = usePathname(); //extract path name from object resulted by calling useLocation() hook
    const targetPlanet = getPlanetFromURL(path) // extract planet name from path
    const planet = data[targetPlanet] // extract planet info from data.js array of objects
    const endPointPath = endPoint(path) //extract end point from path if it does not end with planet name
    const endPointString = endPointPath ? "-" + endPointPath : ""; //if the path name ends with planet name return nothing, else return p "-" + end point


    // checks what is the end point and returns the corresponding planet info from data.js array of objects
    function findContent () {
        if(endPointPath === "geology") {
            return planet.geology.content
        } else if(endPointPath === "structure"){
            return planet.structure.content
        } else {
            return planet.overview.content
        }
    }


    // checks what is the end point and returns the corresponding source info from data.js array of objects
    function findSource () {
        if(endPointPath === "geology") {
            return planet.geology.source
        } else if(endPointPath === "structure"){
            return planet.structure.source
        } else {
            return planet.overview.source
        }
    }

    const content = findContent();

    const source = findSource();

    

    return(
        <div className='content-ctr'>

            <div id="phone-buttons">
                <Buttons />
            </div>
            
            <div className={`${targetPlanet}-img img-ctr`} id={`${targetPlanet}-${endPointPath}`}>
                <img  alt="planet" src={require(`../assets/planet-${targetPlanet}${endPointString}.png`)} />
            </div>
            
            <article className='content'>
                <div id="planet-text">
                    <h1>{ planet.name.toUpperCase()}</h1>
                    <p>
                    {content}
                    </p>
                    <div className='source'>
                        <p id="source-label">Source:</p>
                        <a href={source} target='_blank' rel="noreferrer">Wikipedia</a>
                    </div>
                </div>

                <div id="desktop-buttons">
                <Buttons />
                </div>
                
            </article>
            
        </div>
    )
}