import React, { useEffect, useState } from 'react'
import './components.css'
import '../../configs.css'
import Button from './button'

export default (props) => {
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    useEffect(() => {
        props.changeStatus(status)
    }, [status])

    return (
        <div className={`flexCenter boxPopUpAll ${status}`}>
            <div className="boxPopUp" >
                <div className='flex boxIconPopUp'>
                    {changeIcon(props.icon)}
                </div>
                <div className="boxContentPopUp">
                    {props.content}
                </div>
                <div className="flex flexRow boxPopUpBtns">
                    {changeBtns(props.btn, props.onConfirm ? props.onConfirm : null, setStatus)}
                </div>

            </div>
        </div>
    )
}

const changeBtns = (option, onConfirm, setStatus) => {
    if (option == 'confirmOrDecline') {
        return btnConfirmOrDecline(onConfirm, setStatus)
    }
    else if (option == 'yesOrNo') {
        return btnYesOrNo(onConfirm, setStatus)
    }
    else {
        return btnConfirm(setStatus)
    }
}
const btnConfirm = (setStatus) => {
    return <Button className='buttonPopUp quicksand' onClick={() => setStatus('popUp-hide')} text='Ok' />
}
const btnYesOrNo = (onConfirm, setStatus) => {
    return (
        <React.Fragment>
            <Button className='buttonPopUp margin-right-10px quicksand' onClick={() => onConfirm()} text='Yes' />
            <Button className='buttonPopUp quicksand' onClick={() => setStatus('popUp-hide')} text='No' />
        </React.Fragment>
    )
}
const btnConfirmOrDecline = (onConfirm, setStatus) => {
    return (
        <React.Fragment>
            <Button className='buttonPopUp margin-right-10px quicksand' onClick={() => onConfirm()} text='Ok' />
            <Button className='buttonPopUp quicksand' onClick={() => setStatus('popUp-hide')} text='Cancel' />
        </React.Fragment>
    )
}
const changeIcon = (option) => {
    if (option == 'warning') {
        return <i class="fas fa-exclamation-triangle fa-3x"></i>
    }
    else if (option == 'question') {
        return <i class="far fa-question-circle"></i>
    }
    else if (option == 'closeApp') {
        return <i class="fas fa-skull-crossbones  fa-2x"></i>
    }
    if (!option) {
        return null
    }
}