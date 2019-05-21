import React from 'react';
import './styles.css';

export default props => (
    <button className="btn-default">
        {props.children}
    </button>
);