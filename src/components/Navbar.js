import React from 'react'
import Toggle from './Toggle'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <h1>Movie Search App</h1>
            <Toggle toggleMode={props.toggleMode}/>
        </div>
    )
}

export default Navbar
