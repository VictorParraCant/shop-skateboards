import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './assets/main.scss';
import App from './app/App';

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>,
    document.getElementById('root')
);