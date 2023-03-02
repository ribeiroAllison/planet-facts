import "./Galery.css"
import { Link } from "react-router-dom"


export default function Galery () {

    return(
        
        <main id="galery">
            <div id="desktop">
                <Link to="/mercury" className="planet-card">
                    <img  alt="planet" id="mercury-img" src={require(`../assets/planet-mercury.png`)} />
                    <label for="mercury-img">Mercury</label>
                </Link>
                <Link to="/venus" className="planet-card">
                    <img  alt="planet" id="venus-img" src={require(`../assets/planet-venus.png`)} />
                    <label for="venus-img">Venus</label>
                </Link>
                <Link to="earth" className="planet-card">
                    <img  alt="planet" id="earth-img" src={require(`../assets/planet-earth.png`)} />
                    <label for="earth-img">Earth</label>
                </Link>
                <Link to="mars" className="planet-card">
                    <img  alt="planet" id="mars-img" src={require(`../assets/planet-mars.png`)} />
                    <label for="mars-img">Mars</label>
                </Link>
                <Link to="jupiter" className="planet-card">
                    <img  alt="planet" id="jupiter-img" src={require(`../assets/planet-jupiter.png`)} />
                    <label for="jupiter-img">Jupiter</label>
                </Link>
                <Link to="saturn" className="planet-card">
                    <img  alt="planet" id="saturn-img" src={require(`../assets/planet-saturn.png`)} />
                    <label for="saturn-img">Saturn</label>
                    </Link>
                <Link to="uranus" className="planet-card">
                    <img  alt="planet" id="uranus-img" src={require(`../assets/planet-uranus.png`)} />
                    <label for="uranus-img">Uranus</label>
                </Link>
                <Link to="neptune" className="planet-card">
                    <img  alt="planet" id="neptune-img" src={require(`../assets/planet-neptune.png`)} />
                    <label for="neptune-img">Neptune</label>
                </Link>
            </div>

            <div id="phone">
                <Link to="/mercury" className="planet-card">
                    <img  alt="planet" id="mercury-img" src={require(`../assets/planet-mercury.png`)} />
                    <label for="mercury-img">Mercury</label>
                </Link>
                <Link to="/venus" className="planet-card">
                    <img  alt="planet" id="venus-img" src={require(`../assets/planet-venus.png`)} />
                    <label for="venus-img">Venus</label>
                </Link>
                <Link to="earth" className="planet-card">
                    <img  alt="planet" id="earth-img" src={require(`../assets/planet-earth.png`)} />
                    <label for="earth-img">Earth</label>
                </Link>
                <Link to="mars" className="planet-card">
                    <img  alt="planet" id="mars-img" src={require(`../assets/planet-mars.png`)} />
                    <label for="mars-img">Mars</label>
                </Link>
                <Link to="jupiter" className="planet-card">
                    <img  alt="planet" id="jupiter-img" src={require(`../assets/planet-jupiter.png`)} />
                    <label for="jupiter-img">Jupiter</label>
                </Link>
                <Link to="saturn" className="planet-card">
                    <img  alt="planet" id="saturn-img" src={require(`../assets/planet-saturn.png`)} />
                    <label for="saturn-img">Saturn</label>
                    </Link>
                <Link to="uranus" className="planet-card">
                    <img  alt="planet" id="uranus-img" src={require(`../assets/planet-uranus.png`)} />
                    <label for="uranus-img">Uranus</label>
                </Link>
                <Link to="neptune" className="planet-card">
                    <img  alt="planet" id="neptune-img" src={require(`../assets/planet-neptune.png`)} />
                    <label for="neptune-img">Neptune</label>
                </Link>
            </div>
                
                
        </main>

        
        
    )
}