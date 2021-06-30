import React, { useState } from 'react'
import './components.css'
import '../../configs.css'

export default (props) => {
    return (
        <select className={`quicksand ${props.className}`}>
            {loadOptions(props.options)}
        </select>
    )
}

/* Classes Select  
-selectForm
*/

const loadOptions = (objOptions) => {
    return (
        objOptions.map((val) => {
            return(
                <option value={val}>{val}</option>
            )
        })
    )
}