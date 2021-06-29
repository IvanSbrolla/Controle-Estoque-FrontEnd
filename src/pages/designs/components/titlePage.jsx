import React from 'react'
import './components.css'
import '../../configs.css'


export default (props) => {
    return (
        <div className="flex flexColumn boxTitlePageAll">
            <label className="txtTitlePage">{props.title}</label>
        </div>
    )
}