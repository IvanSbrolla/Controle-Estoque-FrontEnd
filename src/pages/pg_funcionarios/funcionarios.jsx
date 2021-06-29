import React, {useState} from 'react'
import '../configs.css'
import './funcionarios.css'
import TitlePage from '../designs/components/titlePage'
import Table from '../designs/components/table'
import PopUp from '../designs/components/popUp'

export default (props) => {
    const tableHead = ['Id','Nome','Telefone','E-mail','CPF']
    const tableContent = [
        {Id:"01",Nome:"Ivan Sbrolla",Telefone:"11 964324764",Email:"ivan@gmail.com",CPF:"36797969867"},
        {Id:"01",Nome:"FERNANDO Sbrolla",Telefone:"11 964324764",Email:"ivan@gmail.com",CPF:"36797969867"}
    ]
    
    const [popUpStatus,setPopUpStatus] = useState('popUp-hide')

    return (
        <div className='flex flexColumn boxFuncionariosAll'>


            <PopUp btn='yesOrNo' status={popUpStatus} changeStatus={setPopUpStatus}/> 


            <TitlePage title='Funcionarios' />
            <div className='flex flexColumn boxFuncionariosContent'>
                <div className='boxFormAll'>
                    <button onClick={() => setPopUpStatus('popUp-show')}>POP UP</button>
                </div>
                <div className='boxTable'>
                    <Table className='tableDefault' tableContent={tableContent} tableHead={tableHead} />
                </div>
            </div>
        </div>
    )
}

