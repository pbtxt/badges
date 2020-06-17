import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'

import App from './components/App'
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App/>, container);