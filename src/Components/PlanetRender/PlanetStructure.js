import '../../Components/Global.css';
import { NavLink } from 'react-router-dom';
import { data } from '../../data';
import { usePathname, eraseDash } from '../assets/functions';

export default function PlanetStructure (){

    
    const path = usePathname();

    const endPoint = eraseDash(path)

    const planet = data[endPoint]

    
    
    
    

    return(
        <div className='content-ctr'>
            <div className={`${endPoint}-img img-ctr`}>
                <img  alt="planet mercury" src={require(`../assets/planet-${endPoint}-structure.png`)} />
            </div>
            
            <article className='content'>
                <h1>{ planet.name.toUpperCase()}</h1>
                <p>
                {planet.structure.content}
                </p>
                <div className='source'>
                    <p id="source-label">Source:</p>
                    <a href={planet.structure.source} target='_blank' rel="noreferrer">Wikipedia</a>
                </div>
                <div id='buttons' className={`buttons-${endPoint}`}>
                    <NavLink to={`/${endPoint}`}>
                        <p className='buttonNumber'>01</p>
                        <p>OVERVIEW</p>
                    </NavLink>
                    <NavLink to={`/${endPoint}/structure`}>
                        <p className='buttonNumber'>02</p>
                        <p>INTERNAL STRUCTURE</p>
                    </NavLink>
                    <NavLink to={`/${endPoint}/geology`}>
                        <p className='buttonNumber'>02</p>
                        <p>SURFACE GEOLOGY</p>
                    </NavLink>
                </div>
            </article>
            
        </div>
    )
}