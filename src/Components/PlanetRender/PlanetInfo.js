import '../../Components/Global.css';
import { data } from '../../data';
import { usePathname, getPlanetFromURL, endPoint } from '../assets/functions';
import Buttons from './Buttons';

export default function PlanetInfo (){

    
    const path = usePathname();
    const targetPlanet = getPlanetFromURL(path)
    const planet = data[targetPlanet]
    const endPointPath = endPoint(path)
    const endPointString = endPointPath ? "-" + endPointPath : "";

    function findContent () {
        if(endPointPath === "geology") {
            return planet.geology.content
        } else if(endPointPath === "structure"){
            return planet.structure.content
        } else {
            return planet.overview.content
        }
    }

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