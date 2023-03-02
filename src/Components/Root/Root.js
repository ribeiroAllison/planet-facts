import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import './Root.css'
import '../../Components/Global.css'

export default function Navbar () {

    return(
        <div id='root'>
            <header>
                <Link to="/" id="home">THE PLANETS</Link>
                <div id='links'>
                <NavLink to="/mercury">Mercury</NavLink>
                <NavLink to="/venus">Venus</NavLink>
                <NavLink to="/earth">Earth</NavLink>
                <NavLink to="/mars">Mars</NavLink>
                <NavLink to="/jupiter">Jupiter</NavLink>
                <NavLink to="/saturn">Saturn</NavLink>
                <NavLink to="/uranus">Uranus</NavLink>
                <NavLink to="/neptune">Neptune</NavLink>

                </div>
            </header>
            <Outlet />
            
            
            

        </div>
    )
}