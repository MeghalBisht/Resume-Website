import React from 'react'
import './Toggle.css'

function Toggle({toggleTheme}) {

    return (
        <div className="nav-toggle switch">
          <label className="switch">
            <input onClick={toggleTheme } type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
    )
}


export default Toggle
