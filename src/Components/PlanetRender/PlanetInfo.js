import '../../Components/Global.css';
import { NavLink } from 'react-router-dom';
import { data } from '../../data';
import { usePathname, eraseDash } from '../assets/functions';

export default function OverviewMercury (){

    
    const path = usePathname();

    const endPoint = eraseDash(path)

    const planet = data[endPoint]
    
    
    

    return(
        <div className='content-ctr'>
            <div className={`${endPoint}-img img-ctr`}>
                <img  alt="planet mercury" src={require(`../assets/planet-${endPoint}.png`)} />
            </div>
            
            <article className='content'>
                <h1>{ planet.name.toUpperCase()}</h1>
                <p>
                {planet.overview.content}
                </p>
                <div className='source'>
                    <p id="source-label">Source:</p>
                    <a href={planet.overview.source} target='_blank' rel="noreferrer">Wikipedia</a>
                </div>
                <div id='buttons'>
                    <NavLink to={`/${endPoint}`}>
                        <p className='buttonNumber'>01</p>
                        <p>OVERVIEW</p>
                    </NavLink>
                    <NavLink to="/">
                        <p className='buttonNumber'>02</p>
                        <p>INTERNAL STRUCTURE</p>
                    </NavLink>
                    <NavLink to="/">
                        <p className='buttonNumber'>02</p>
                        <p>SURFACE GEOLOGY</p>
                    </NavLink>
                </div>
            </article>
            
        </div>
    )
}