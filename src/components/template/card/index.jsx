import React from 'react';
import './styles.css';
import Button from '../../button/index';

export default props => (
    <div className="card mb-3" >
        <div className="card-header bg-transparent">{props.title}</div>
        <div className="card-body">
            <input type="text" placeholder="Nome completo"/>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="senha"/>
            <Button>{props.textButton}</Button>
        </div>
        <div className="card-footer bg-transparent">{props.textFooter}</div>
    </div>
);