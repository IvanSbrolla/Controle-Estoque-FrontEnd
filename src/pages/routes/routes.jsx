import React from 'react'
import { Switch, Route } from "react-router-dom";
import '../configs.css'
import Menu from '..//designs/components/menu'
import PgLogin from '../pg_login/login';
import PgFuncionarios from '../pg_funcionarios/funcionarios';
import PgEmpresas from '../pg_empresas/empresas';
import PgMovimentacao from '../pg_movimentacao/movimentacao';
import PgProdutos from '../pg_produtos/produtos';
import PgFrenteCaixa from '../pg_frenteCaixa/frenteCaixa';
import PgClientes from '../pg_clientes/clientes';

const Content = (props) => {
    return (
        <Switch>
            <Route path='/login'>
                <PgLogin />
            </Route>
            <Route path='/funcionarios'>
                <div className='flex flexRow boxAll'>
                    <Menu />
                    <PgFuncionarios />
                </div>

            </Route>
            <Route path='/empresas'>
                <div className='flex flexRow boxAll'>
                    <Menu />
                    <PgEmpresas />
                </div>
            </Route>
            <Route path='/movimentacao'>
                <div className='flex flexRow boxAll'>
                    <Menu />
                    <PgMovimentacao />
                </div>

            </Route>
            <Route path='/produtos'>
                <div className='flex flexRow boxAll'>
                    <Menu />
                    <PgProdutos />
                </div>

            </Route>
            <Route path='/frenteCaixa'>
                <div className='flex flexRow boxAll'>
                    <Menu />
                    <PgFrenteCaixa />
                </div>

            </Route>
            <Route path='/clientes'>
                <div className='flex flexRow boxAll'>
                    <Menu />
                    <PgClientes />
                </div>

            </Route>
        </Switch>
    )
}

export default Content