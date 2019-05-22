import React from 'react';

import Card from '../card/index';

export default props => (
    <Card title="Cadastre-se" textButton="Criar conta" 
        footer="Já é cadastrado? Então efetue o" link="Login"
        rota="/login" linkEsqueceuSenha="" rotaEsqueceuSenha="">
        {[{type: 'text', placeholder: 'Nome completo'}, {type: 'email', placeholder: 'E-mail'},  {type: 'password', placeholder: 'Senha'}]}
    </Card>
);