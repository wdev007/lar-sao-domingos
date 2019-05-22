import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import Home from '../components/home/Home';

import Login from '../components/template/login/index';
import Cadastro from '../components/template/cadastro/index';
import ReacuperarSenha from '../components/template/recuperar-senha/index';

export default props => (
    <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/cadastro" component={Cadastro}/>
        <Route path="/recuperar-senha" component={ReacuperarSenha}/>
        <Redirect from="*" to="/"/>
    </Switch>
);