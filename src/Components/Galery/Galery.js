import "./Galery.css"
import { Link } from "react-router-dom"


export default function Galery (props) {

    const planetList = props.planets

    return(
        
        <main id="galery">
            <div id="desktop">
                {
                    planetList.map(planet => 
                        <Link to={`/${planet.name.toLowerCase()}`} className="planet-card">
                            <img  alt="planet" id={`${planet.name.toLowerCase()}-img`} src={planet.images.planet} />
                            <label for={`${planet.name.toLowerCase()}-img`}>{planet.name}</label>
                        </Link>)
                }
                
            </div>



            <div id="phone">

                {
                    planetList.map(planet => 
                        <Link to="/mercury" className="planet-card">
                    
                                <div className="menu-planet">
                                    <img  alt="planet" id={`${planet.name.toLowerCase()}-img`} src={planet.images.icon} />
                                    <label for={`${planet.name.toLowerCase()}-img`}>{planet.name}</label>
                                </div>
                                <div className="arrow">
                                    <img alt="selection arrow" src={planet.images.arrow}/>
                                </div>
                            
                        </Link>
                        )
                }
            

            </div>
                
                
        </main>

        
        
    )
}