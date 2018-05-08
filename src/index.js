import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './scenes/css/easy-responsive-tabs.min.css';
import './scenes/css/tabs.css';
import './scenes/css/style.css';
import {App} from './scenes/components/App/App.jsx';
import { isMobile } from "react-device-detect";

import registerServiceWorker from './registerServiceWorker';

// Get the version as defined in the package json
const latestVersion = process.env.REACT_APP_VERSION;
// Get the version as known by the browser (local storage)
let detectedVersion = localStorage.getItem('detectedVersion');
// Set a reload count
let reloadCount = localStorage.getItem('reloadCount');
// If the reload count is not existing or empty, set the default value to 0
if (reloadCount === "" || reloadCount === null) {
    reloadCount = 0;
}

isMobile ? console.log("This is a mobile version") : null;
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
    console.log('Welcome to version ' + process.env.REACT_APP_VERSION + ' of the ' + process.env.REACT_APP_NAME + ' package!');
    console.log('The currently detected version is: ' + detectedVersion)
}
// If there is no browser version set yet, create one in the local storage
if (detectedVersion === "" || detectedVersion === null) {
    localStorage.setItem('detectedVersion', latestVersion );
    reloadCount = reloadCount + 1;
    localStorage.setItem('reloadCount', reloadCount );
    // To prevent endless loops in case of errors, set a maximum reload count
    if (reloadCount < 2) {
        // Reload the page / clear the cache
        window.location.reload()
    }
    console.log("There is a problem with the version detection...")
    localStorage.setItem('reloadCount', reloadCount );
}
else{
    if (latestVersion !== detectedVersion) {
        localStorage.setItem('detectedVersion', latestVersion );
        reloadCount = reloadCount + 1;
        localStorage.setItem('reloadCount', reloadCount );
        // To prevent endless loops in case of errors, set a maximum reload count
        if (reloadCount < 2) {
            // Reload the page / clear the cache
            window.location.reload()
        }
        console.log("There is a problem with the version compare...")
        localStorage.setItem('reloadCount', reloadCount );
    }
}

/* TODO:
    * Change picture of bridge
    * Define routes for images, sitemap and php
*/

ReactDOM.render(
    <BrowserRouter>
        <App/>   
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();
