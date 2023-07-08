import '../../Components/Global.css';
import { NavLink } from 'react-router-dom';
import usePathname from '../../utils/usePathname';
import getPlanetFromURL from '../../utils/getPlanetFromUrl';

export default function Buttons (){

    
    const path = usePathname();

    const targetPlanet = getPlanetFromURL(path) // extracted planet name from URL

    return(
        <div id='buttons' className={`buttons-${targetPlanet}`}>
            <NavLink to={`/${targetPlanet}`} end>
                <p className='buttonNumber'>01</p>
                <p>OVERVIEW</p>
                
            </NavLink>
            <NavLink to={`/${targetPlanet}/structure`}>
                <p className='buttonNumber'>02</p>
                <p>INTERNAL STRUCTURE</p>
            </NavLink>
            <NavLink to={`/${targetPlanet}/geology`}>
                <p className='buttonNumber'>03</p>
                <p>SURFACE GEOLOGY</p>
            </NavLink>
        </div>
    )

}