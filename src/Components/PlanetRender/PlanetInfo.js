import '../../Components/Global.css';
import usePathname from '../../utils/usePathname';
import getPlanetFromURL from '../../utils/getPlanetFromUrl';
import endPoint from '../../utils/endPoint';
import Buttons from './Buttons';
import findPlanetData from '../../utils/findPlanetData';

export default function PlanetInfo (props){
    
    const planetsArray = props.planets;
    const path = usePathname(); //extract path name from object resulted by calling useLocation() hook
    const targetPlanet = getPlanetFromURL(path) //search for the planet name in the path;
    const planet = findPlanetData(targetPlanet, planetsArray) //find the correct planet in the objects array got from server;
    const endPointPath = endPoint(path) //extract end-point from path if it does not end with planet name


    // checks what is the end point and returns the corresponding planet info from array of objects from server request
    function findContent () {
        if(endPointPath === "geology") {
            return planet.geology.content
        } else if(endPointPath === "structure"){
            return planet.structure.content
        } else {
            return planet.overview.content
        }
    }


    // checks what is the end point and returns the corresponding source info from array of objects
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

            {/* Buttons for phone media query */}
            <div id="phone-buttons">
                <Buttons />
            </div>
            
            {/* Shows the correct image depending on endpath (planet-name, structure or geology) */}
            <div className={`${targetPlanet}-img img-ctr`} id={`${targetPlanet}-${endPointPath}`}>
                {
                    !endPointPath && <img  alt="planet" src={planet.images.planet} />
                }
                {
                    endPointPath === 'structure' && <img  alt="planet's internal structure" src={planet.images.internal} />
                }

{
                    endPointPath === 'geology' && <img  alt="planet's geology" src={planet.images.geology} />
                }
                
            </div>
            
            {/* Switches source link depending on planet name */}
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