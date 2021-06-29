import React, { useState } from 'react'
import './components.css'
import '../../configs.css'
import PopUp from './popUp'
import Button from './button'

import MenuIndex from './menuIndex'

export default (props) => {
    const [popUpStatus, setPopUpStatus] = useState('popUp-hide')
    return (
        <React.Fragment>
            <PopUp btn='yesOrNo' status={popUpStatus} changeStatus={setPopUpStatus} onConfirm={() => window.close()} icon='closeApp' content={closeAppContent()}/>
            <div className='flex flexColumn boxMenu'>
                <div className='flex flexCenter flexColumn boxMenuLogo'>
                    <i class="fas fa-dragon fa-5x logoMenu"></i>
                    <label className='titleMenu'>Axy-Sys</label>
                </div>
                <div className='flex flexColumn boxIndexMenu'>
                    <MenuIndex path='frenteCaixa' indexTitle='Vender' indexImage={<i class="fas fa-shopping-basket iconMenuIndex"></i>} />
                    <MenuIndex path='produtos' indexTitle='Produtos' indexImage={<i class="fab fa-product-hunt iconMenuIndex"></i>} />
                    <MenuIndex path='clientes' indexTitle='Clientes' indexImage={<i class="fas fa-users iconMenuIndex"></i>} />
                    <MenuIndex path='empresas' indexTitle='Empresas' indexImage={<i class="fas fa-building iconMenuIndex"></i>} />
                    <MenuIndex path='movimentacoes' indexTitle='Movimentações' indexImage={<i class="far fa-chart-bar iconMenuIndex"></i>} />
                    <MenuIndex path='funcionarios' indexTitle='Funcionarios' indexImage={<i class="fas fa-user-tie iconMenuIndex"></i>} />
                    <div className='flex flexColumn boxIndexMenuCloseApp'>
                        <MenuIndex indexTitle='Sair' indexImage={<i class="fas fa-door-open iconMenuIndex"></i>} className='indexMenuCloseApp' onClick={() => setPopUpStatus('popUp-show')} />
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