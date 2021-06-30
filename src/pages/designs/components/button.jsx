import React from 'react'
import './components.css'
import '../../configs.css'

export default (props) => {
    return <button className={props.className} onClick={props.onClick}><strong>{props.text}</strong></button>
}

/* Classes Css:
-buttonDefault
-buttonLogin
-buttonCloseApp
-buttonMenu
*/