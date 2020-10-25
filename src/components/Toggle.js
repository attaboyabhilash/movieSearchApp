import React, { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import '../App.css'

const initialState = false || JSON.parse(localStorage.getItem('checkbox'))

const Toggle = (props) => {
    const [checkBox, setCheckBox] = useState(initialState)

    const toggleDarkMode = () => {
        setCheckBox(prevState => !prevState)
        props.toggleMode()
    }

    useEffect(() => {
        localStorage.setItem('checkbox', JSON.stringify(checkBox))
    }, [checkBox])

    return (
        <div className="toggles">
            <label>
                <input className='toggle-checkbox' type='checkbox' checked={checkBox} onChange={toggleDarkMode}></input>
                <div className='toggle-slot'>
                    <div className='sun-icon-wrapper'>
                        <FiSun className="iconify sun-icon" />
                    </div>
                    <div className='toggle-button'></div>
                    <div className='moon-icon-wrapper'>
                        <FiMoon className="iconify moon-icon"/>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Toggle
