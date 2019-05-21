import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import Home from '../components/home/Home';
import Header from '../components/template/header/index';

export default props => (
    <BrowserRouter>
        <div className="app">
            <Header/>
            <Home/>
        </div>
    </BrowserRouter>
);