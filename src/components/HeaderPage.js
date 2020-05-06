import React from 'react'
import { NavLink } from 'react-router-dom'
const HeaderPage = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" exact> Home</NavLink>
                {"||"}
                <NavLink to="/about" > About</NavLink>
                {"||"}
                <NavLink to="/Courses" > Courses</NavLink>

            </nav>
        </div>
    )
}

export default HeaderPage
