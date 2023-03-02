import '../../Components/Global.css';
import { data } from '../../data';
import { usePathname, eraseSlash, endPoint } from '../assets/functions';
import Buttons from './Buttons';

export default function PlanetInfo (){

    
    const path = usePathname();

    const targetPlanet = eraseSlash(path)

    const planet = data[targetPlanet]

    const endPointPath = endPoint(path)

    const endPointString = endPointPath ? "-" + endPointPath : "";

    function findContent () {
        if(endPointPath === "overview") {
            return planet.overview.content
        } else if(endPointPath === "structure"){
            return planet.structure.content
        } else {
            return planet.geology.content
        }
    }

    function findSource () {
        if(endPointPath === "overview") {
            return planet.overview.source
        } else if(endPointPath === "structure"){
            return planet.structure.source
        } else {
            return planet.geology.source
        }
    }

    const content = findContent();

    const source = findSource();

    

    
    
    
    

    return(
        <div className='content-ctr'>
            <div className={`${targetPlanet}-img img-ctr`} id={`${targetPlanet}-${endPointPath}`}>
                <img  alt="planet" src={require(`../assets/planet-${targetPlanet}${endPointString}.png`)} />
            </div>
            
            <article className='content'>
                <h1>{ planet.name.toUpperCase()}</h1>
                <p>
                {content}
                </p>
                <div className='source'>
                    <p id="source-label">Source:</p>
                    <a href={source} target='_blank' rel="noreferrer">Wikipedia</a>
                </div>
                <Buttons />
            </article>
            
        </div>
    )
}