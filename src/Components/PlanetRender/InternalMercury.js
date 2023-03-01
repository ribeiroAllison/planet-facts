import '../../Components/Global.css';
import { NavLink } from 'react-router-dom';
import { data } from '../../data';

export default function OverviewMercury (){

    const planet = data.mercury
    

    return(
        <div className='content-ctr'>
            <div className='img-ctr content'>
                <img alt="planet mercury" src={require("../assets/planet-mercury-internal.png")} />
            </div>
            
            <article className='content'>
                <h1>{planet.name}</h1>
                <p>
                {planet.structure.content}
                </p>
                <div className='source'>
                    <p id="source-label">Source:</p>
                    <a href={planet.structure.source} target='_blank'>Wikipedia</a>
                </div>
                <div id='buttons'>
                    <NavLink to="/mercury">
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