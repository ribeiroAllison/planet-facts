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
                {/* <Link to="/mercury" className="planet-card">
                    
                        <div className="menu-planet">
                            <img  alt="planet" id="mercury-img" src={require(`../assets/planet-mercury-icon.png`)} />
                            <label for="mercury-img">Mercury</label>
                        </div>
                        <div className="arrow">
                            <img alt="selection arrow" src={require('../assets/arrow.png')}/>
                        </div>
                    
                </Link>

                <Link to="/venus" className="planet-card">
                    
                        <div className="menu-planet">
                            <img  alt="planet" id="venus-img" src={require(`../assets/planet-venus-icon.png`)} />
                            <label for="venus-img">Venus</label>
                        </div>
                        <div className="arrow">
                            <img alt="selection arrow" src={require('../assets/arrow.png')}/>
                        </div>
                    
                </Link>

                <Link to="earth" className="planet-card">
                    
                        <div className="menu-planet">
                            <img  alt="planet" id="earth-img" src={require(`../assets/planet-earth-icon.png`)} />
                            <label for="earth-img">Earth</label>
                        </div>
                        <div className="arrow">
                            <img alt="selection arrow" src={require('../assets/arrow.png')}/>
                        </div>
                    
                </Link>

                <Link to="mars" className="planet-card">
                    
                        <div className="menu-planet">
                            <img  alt="planet" id="mars-img" src={require(`../assets/planet-mars-icon.png`)} />
                            <label for="mars-img">Mars</label>
                        </div>
                        <div className="arrow">
                            <img alt="selection arrow" src={require('../assets/arrow.png')}/>
                        </div>
                    
                </Link>

                <Link to="jupiter" className="planet-card">
                    
                        <div className="menu-planet">
                            <img  alt="planet" id="jupiter-img" src={require(`../assets/planet-jupiter-icon.png`)} />
                            <label for="jupiter-img">Jupiter</label>
                        </div>
                        <div className="arrow">
                            <img alt="selection arrow" src={require('../assets/arrow.png')}/>
                        
                    </div>
                </Link>

                <Link to="saturn" className="planet-card">
                    
                        <div className="menu-planet">
                            <img  alt="planet" id="saturn-img" src={require(`../assets/planet-saturn-icon.png`)} />
                            <label for="saturn-img">Saturn</label>
                        </div>
                        <div className="arrow">
                            <img alt="selection arrow" src={require('../assets/arrow.png')}/>
                        </div>
                    
                </Link>

                <Link to="uranus" className="planet-card">
                    
                        <div className="menu-planet">
                            <img  alt="planet" id="uranus-img" src={require(`../assets/planet-uranus-icon.png`)} />
                            <label for="uranus-img">Uranus</label>
                        </div>
                        <div className="arrow">
                            <img alt="selection arrow" src={require('../assets/arrow.png')}/>
                        </div>
                    
                </Link>

                <Link to="neptune" className="planet-card">
                    
                        <div className="menu-planet">
                            <img  alt="planet" id="neptune-img" src={require(`../assets/planet-neptune-icon.png`)} />
                            <label for="neptune-img">Neptune</label>
                        </div>
                        <div className="arrow">
                            <img alt="selection arrow" src={require('../assets/arrow.png')}/>
                        </div>
                    
                </Link> */}

            </div>
                
                
        </main>

        
        
    )
}