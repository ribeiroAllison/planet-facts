import "../../Components/Global.css"

const Footer = (props) =>{

    const planet = props.planet;

    return(
        
        <footer className="footer">
            <div className="cards">
                <p>ROTATION TIME</p>
                <h3>{planet.rotation}</h3>
            </div>
            <div className="cards">
                <p>REVOLUTION TIME</p>
                <h3>{planet.revolution}</h3>
            </div>
            <div className="cards">
                <p>RADIUS</p>
                <h3>{planet.radius}</h3>
            </div>
            <div className="cards">
                <p>AVERAGE TEMP</p>
                <h3>{planet.temperature}</h3>
            </div>
        </footer>
        
    )
}

export default Footer;