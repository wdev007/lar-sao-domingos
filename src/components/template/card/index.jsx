import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import Button from '../../button/index';

export default props => {

    return (
        <div className="card mb-3" >
            <div className="card-header bg-transparent">{props.title}</div>
            <div className="card-body">
                <p>
                {props.body}
                </p>
                {props.children.map((item, i) => (
                    <input type={item.type} placeholder={item.placeholder} key={i}/>
                ))}
                <p>
                    <Link to={props.rotaEsqueceuSenha}>{props.linkEsqueceuSenha}</Link>
                </p>
                <Button>{props.textButton}</Button>
            </div>
            <div className="card-footer bg-transparent">
            {props.footer}
            <Link to={props.rota}> {props.link}</Link>
            </div>
        </div>
        );

}

