import React from 'react'
import './components.css'
import '../../configs.css'

export default (props) => {
    return (
        <div className='flex flexRow indexMenu'  onClick={props.onClick}>
            <div className='flex flexCenter boxImageMenuIndex'>
                {props.indexImage}
            </div>
            <div className='flex flexCenter boxTitleMenuIndex'>
                <label className='titleMenuIndex'>
                    {props.indexTitle}
                </label>
            </div>
        </div>
    )
}
