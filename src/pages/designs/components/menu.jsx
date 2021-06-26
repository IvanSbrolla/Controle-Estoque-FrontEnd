import React from 'react'
import './components.css'
import '../../configs.css'

import MenuIndex from './menuIndex'

export default (props) => {
    return (
        <div className='flex flexColumn boxMenu'>
            <div className='flex flexCenter flexColumn boxMenuLogo'>
                <i class="fas fa-dragon fa-5x logoMenu"></i>
                <label className='titleMenu'>Axy-Sys</label>
            </div>
            <div className='flex flexColumn boxIndexMenu'>
                <MenuIndex indexTitle='Vender' indexImage={<i class="fas fa-shopping-basket iconMenuIndex"></i>} />
                <MenuIndex indexTitle='Produtos' indexImage={<i class="fab fa-product-hunt iconMenuIndex"></i>} />
                <MenuIndex indexTitle='Clientes' indexImage={<i class="fas fa-users iconMenuIndex"></i>} />
                <MenuIndex indexTitle='Empresas' indexImage={<i class="fas fa-building iconMenuIndex"></i>} />
                <MenuIndex indexTitle='Movimentações' indexImage={<i class="far fa-chart-bar iconMenuIndex"></i>} />
                <MenuIndex indexTitle='Funcionarios' indexImage={<i class="fas fa-user-tie iconMenuIndex"></i>} />
                <div className='flex flexColumn boxIndexMenuCloseApp'>
                    <MenuIndex indexTitle='Sair' indexImage={<i class="fas fa-door-open iconMenuIndex"></i>} className='indexMenuCloseApp' onClick={() => window.close()} />
                </div>
            </div>
        </div>
    )
}
