import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Root.css'
import '../../Components/Global.css'

export default function Navbar () {

    return(
        <div id='root'>
            <header>
                <h2>THE PLANETS</h2>
                <div id='links'>
                <NavLink to="/mercury">Mercury</NavLink>
                <NavLink to="">Venus</NavLink>
                <NavLink to="">Earth</NavLink>
                <NavLink to="">Mars</NavLink>
                <NavLink to="">Jupiter</NavLink>
                <NavLink to="">Saturn</NavLink>
                <NavLink to="">Uranus</NavLink>
                <NavLink to="">Neptune</NavLink>

                </div>
            </header>
            <Outlet />
            
            
            

        </div>
    )
}