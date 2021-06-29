import React from 'react'
import '../configs.css'
import './notfound.css'

export default (props) => {
    return (
        <div className='flex flexCenter boxNotFoundAll'>
            <div className='flex flexCenter flexColumn boxTxtNotFound'>
                <label className="txtNotFound quicksand">Página não encontrada.</label>
                <label className="subTxtNotFound quicksand">404 Not Found</label>
            </div>
        </div>
    )
}