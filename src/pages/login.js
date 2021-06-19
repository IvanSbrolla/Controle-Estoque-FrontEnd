import React from 'react'
import img_fundoLogin from './designs/fundoLogin.png';
import img_user from './designs/user.png'
import './login.css'
import './configs.css'
import Button from './components/button'
import Input from './components/input'


class pgLogin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="flex flexColumn boxLogin">
                    <div className="flex flexCenter boxImgUser">
                        <img id="img_user" src={img_user}></img>
                    </div>
                    <div className="flex flexColumn flexCenter boxFormLogin">
                        <img src={img_fundoLogin} id="img_fundoLogin" className='absolute' />
                        <form className='flex flexColumn flexCenter formLogin'>
                            <div className='flex flexCenter boxInputUser'>
                                <Input placeholder="Usuário" className="inputLogin quicksand " type="text" />
                            </div>
                            <div className='flex flexCenter boxInputPassword'>
                                <Input placeholder="Senha" className="inputLogin quicksand " type="password" />
                            </div>
                        </form>
                        <div className="flex flexColumn flexCenter boxButtonLogin">
                            <Button text='Entrar' className='buttonLogin quicksand' />
                        </div>
                        <Button className='buttonCloseApp' id='btnSair' text={<i class="fas fa-times "></i>} onClick={() => window.close()}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default pgLogin

