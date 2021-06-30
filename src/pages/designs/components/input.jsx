import React from 'react'
import "../../configs.css"

export default (props) => {
    return <input type={props.type} className={`quicksand ${props.className}`} placeholder={props.placeholder} />
}

/* Classes Css:
-inputDefault
-inputLogin
*/