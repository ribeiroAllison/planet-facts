import { Outlet } from "react-router-dom"
import '../../Components/Global.css'

export default function Mercury () {
   
    return(
        <div id="mercury">
            <main>
                <Outlet />
            </main>
            <footer className="footer">
                <div className="cards">
                    <p>ROTATION TIME</p>
                    <h3>58.6 DAYS</h3>
                </div>
                <div className="cards">
                    <p>REVOLUTION TIME</p>
                    <h3>87.97 DAYS</h3>
                </div>
                <div className="cards">
                    <p>RADIUS</p>
                    <h3>2,439.7 KM</h3>
                </div>
                <div className="cards">
                    <p>AVERAGE TEMP</p>
                    <h3>430°c</h3>
                </div>
            </footer>
        </div>
    )
}