import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img_user from '../designs/user.png'
import './login.css'
import '../configs.css'
import Button from '../designs/components/button'
import Input from '../designs/components/input'
import PopUp from '../designs/components/popUp'

export default (props) => {
    const [popUpStatus, setPopUpStatus] = useState('popUp-hide')

    return (
        <React.Fragment>
            <PopUp btn='yesOrNo' status={popUpStatus} changeStatus={setPopUpStatus} onConfirm={() => window.close()} icon='closeApp' content={closeAppContent()}/>
            <div className="flex flexColumn flexCenter boxAllLogin">
                <div className='boxLogin'>
                    {/* box image user */}
                    <div className="flex flexCenter boxImgUser">
                        <img id="img_user" src={img_user}></img>
                    </div>
                    {/* box form login */}
                    <div className="flex flexColumn flexCenter boxFormLogin">
                        <form className='flex flexColumn flexCenter formLogin'>
                            <div className='flex flexCenter boxInputUser'>
                                <Input placeholder="Usuário" className="inputLogin quicksand " type="text" />
                            </div>
                            <div className='flex flexCenter boxInputPassword'>
                                <Input placeholder="Senha" className="inputLogin quicksand " type="password" />
                            </div>
                        </form>
                        <div className="flex flexColumn flexCenter boxButtonLogin">
                            <Link to='/funcionarios'>
                                <Button text='Entrar' className='buttonLogin quicksand' />
                            </Link>
                        </div>

                        <Button className='buttonCloseApp' id='btnSair' text={<i class="fas fa-times "></i>} onClick={() => setPopUpStatus('popUp-show')} />


                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const closeAppContent = () => {
    return (
        <label>Tem certeza que deseja sair?</label>
    )
}


