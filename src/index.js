import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    (<BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>)
    , document.getElementById('root'));
registerServiceWorker();
