import React from 'react';

import Card from '../card/index';

export default props => (
    <Card title="Login" textButton="Entrar" 
        footer="Primeira vez no Lar são Domingos? " link="Cadastre-se"
        rota="/cadastro" linkEsqueceuSenha="Esqueceu sua senha?" rotaEsqueceuSenha="recuperar-senha">
        {[{type: 'email', placeholder: 'E-mail'}, {type: 'password', placeholder: 'Senha'}]}
    </Card>
);