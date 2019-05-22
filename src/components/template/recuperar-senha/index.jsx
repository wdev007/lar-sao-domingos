import React from 'react';

import Card from '../card/index';

export default props => (
    <Card title="Esqueceu a senha?"  textButton="Recuperar"
    body="Digite o endereço de e-mail que você usou para se inscrever e nós lhe enviaremos um link para redefinir sua senha"
    rota="/" linkEsqueceuSenha="" rotaEsqueceuSenha="">
    {[{type: 'email', placeholder: 'E-mail'}]}
    </Card>
);