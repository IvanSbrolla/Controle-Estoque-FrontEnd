import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'
import '../../configs.css'

export default (props) => {
    if (props.path) {
        return (
            <Link to={`/${props.path}`}>
                <div className='flex flexRow indexMenu' onClick={props.onClick}>
                    <div className='flex flexCenter boxImageMenuIndex'>
                        {props.indexImage}
                    </div>
                    <div className='flex flexCenter boxTitleMenuIndex'>
                        <label className='titleMenuIndex quicksand'>
                            {props.indexTitle}
                        </label>
                    </div>
                </div>
            </Link >
        )
    }
    else {
        return (
            <div className='flex flexRow indexMenu' onClick={props.onClick}>
                <div className='flex flexCenter boxImageMenuIndex'>
                    {props.indexImage}
                </div>
                <div className='flex flexCenter boxTitleMenuIndex'>
                    <label className='titleMenuIndex quicksand'>
                        {props.indexTitle}
                    </label>
                </div>
            </div>
        )

    }

}
