import React, { useState } from 'react'
import './funcionarios.css'
import '../designs/components/components.css'
import '../configs.css'
import '../page.css'
import TitlePage from '../designs/components/titlePage'
import Table from '../designs/components/table'
import PopUp from '../designs/components/popUp'
import Button from '../designs/components/button'
import Select from '../designs/components/select'

export default (props) => {
    /* EXEMPLO PARA POPULAR TABELA */
    const tableHead = ['Id', 'Nome', 'Telefone', 'E-mail', 'CPF']
    const tableContent = [
        { Id: "01", Nome: "Ivan Sbrolla", Telefone: "11 964324764", Email: "ivan@gmail.com", CPF: "36797969867" },
        { Id: "01", Nome: "FERNANDO Sbrolla", Telefone: "11 964324764", Email: "ivan@gmail.com", CPF: "36797969867" }
    ]

    const [popUpStatus, setPopUpStatus] = useState('popUp-hide')

    return (
        <div className='flex flexColumn boxPageAll'>
            <PopUp btn='yesOrNo' status={popUpStatus} changeStatus={setPopUpStatus} />
            <TitlePage title='Funcionarios' />
            <div className='flex flexColumn boxContent'>
                <div className='flex flexColumn boxFormAll'>
                    <div className="flex flexRow boxFormRow margin-top-30px">

                        <div className="flex flexColumn boxId">
                            <label className='margin-left-15px txtInput'>Id</label>
                            <div className='flex flexRow alignItemBase'>
                                <input className='inputForm margin-left-15px quicksand margin-right-10px' placeholder='Id' />
                                {btnSearch()}
                            </div>

                        </div>
                        <div className="flex flexColumn boxName">
                            <label className='margin-left-15px txtInput'>Nome</label>
                            <div className='flex flexRow alignItemBase'>
                                <input className='inputForm margin-left-15px quicksand margin-right-10px' placeholder='Nome' />
                                {btnSearch()}
                            </div>
                        </div>
                    </div>
                    <div className="flex flexRow boxFormRow margin-top-30px">
                        <div className="flex flexColumn boxHalfWidth">
                            <label className='margin-left-15px txtInput'>Email</label>
                            <div className='flex flexRow alignItemBase'>
                                <input className='inputForm margin-left-15px quicksand margin-right-10px' placeholder='Email' />
                                {btnSearch()}
                            </div>
                        </div>
                        <div className="flex flexColumn boxHalfWidth">
                            <label className='margin-left-15px txtInput'>Telefone</label>
                            <div className='flex flexRow alignItemBase'>
                                <input className='inputForm margin-left-15px quicksand margin-right-10px' placeholder='Telefone' />
                                {btnSearch()}
                            </div>
                        </div>
                    </div>
                    <div className="flex flexRow boxFormRow margin-top-30px">
                        <div className="flex flexColumn boxHalfWidth">
                            <label className='margin-left-15px txtInput'>CPF</label>
                            <div className='flex flexRow alignItemBase'>
                                <input className='inputForm margin-left-15px quicksand margin-right-10px' placeholder='CPF' />
                                {btnSearch()}
                            </div>
                        </div>
                        <div className="flex flexColumn boxHalfWidth">
                            <label className='margin-left-15px txtInput'>Cargo</label>
                            <div className='flex flexRow alignItemBase'>
                                <Select options={optionsCargo} className='margin-left-15px selectForm margin-right-10px' />
                                {btnSearch()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flexCenter flexRow boxBtnsActions'>
                    <Button className='buttonDefault margin-right-15px quicksand' text='Registrar' />
                    <Button className='buttonDefault margin-right-15px quicksand' text='Atualizar' />
                    <Button className='buttonDefault margin-right-15px quicksand' text='Remover' />
                </div>
                <div className='boxTable'>
                    <Table className='tableDefault' tableContent={tableContent} tableHead={tableHead} />
                </div>
            </div>
        </div>
    )
}

const optionsCargo = [
    'Admin',
    'Gerente',
    'Vendedor'
]

const btnSearch = (onClick) => {
    return (
        <Button className='buttonSearch flex flexCenter' text={<i class="fas fa-search searchIcon"></i>} />
    )
}
