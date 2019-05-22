import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import Header from '../components/template/header/index';

import Routes from './Routes';

export default props => (
    <BrowserRouter>
        <div className="app">
            <Header/>
            <Routes/>
        </div>
    </BrowserRouter>
);