import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <div className='jumbotron'>
            <h2> Pluralsight Admin</h2>
            <h3>React Redux and React Router Dom for Web Dev</h3>
            <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
    )
}
