import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './scenes/css/easy-responsive-tabs.min.css';
import './scenes/css/tabs.css';
import './scenes/css/style.css';
import {App} from './scenes/components/App/app.jsx';

import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

/* TODO:
    * Remove images from projects on Mobile
    * Fix mobile screen resolution
    * Fix some image overflow
*/

ReactDOM.render(
    <BrowserRouter>
        <App/>   
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();
