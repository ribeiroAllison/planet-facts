import "./Galery.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Galery (props) {

    const [planetList, setPlanetList] = useState()

    useEffect(() => {
        if(props.planets){
            setPlanetList(props.planets)
        }
    }, [props.planets])


    return(
        
        <main id="galery">

            <div id="desktop">
                {
                    planetList?.map(planet => 
                        <Link to={`/${planet.name.toLowerCase()}`} className="planet-card" key={`${planet.name}-desktop`}>
                            <img  alt="planet" id={`${planet.name.toLowerCase()}-img`} src={planet.images.planet} />
                            <label htmlFor={`${planet.name.toLowerCase()}-img`}>{planet.name}</label>
                        </Link>)
                }
                
            </div>



            <div id="phone">

                {
                    planetList?.map(planet => 
                        <Link to="/mercury" className="planet-card" key={`${planet.name}-mobile`}>
                    
                                <div className="menu-planet">
                                    <img  alt="planet" id={`${planet.name.toLowerCase()}-img`} src={planet.images.icon} />
                                    <label htmlFor={`${planet.name.toLowerCase()}-img`}>{planet.name}</label>
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