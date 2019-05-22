import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

export default prosp => (
    <nav class="header navbar navbar-light bg-light">
        <h1>Lar São Domingos</h1>
        <div className="group-link">
            <Link to="/busca">Buscar ONG</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
);