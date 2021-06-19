import React from 'react'
import './components.css'

export default (props) => {
    return <button className={props.className} id={props.id} onClick={props.onClick}><strong>{props.text}</strong></button>
}

/* Classes Css:
-buttonDefault
-buttonLogin
-buttonCloseApp
*/