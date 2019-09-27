import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from  'react-redux';
import {createStore} from 'redux';

import reducer from './store/reducer';

debugger

const store=createStore(reducer);
debugger

const aaa = () =>{
    debugger
return (<Provider store={store}><App /></Provider>);
}

const bbb = () => {
    debugger
    return ( document.getElementById('root'));
}

ReactDOM.render(aaa(),bbb());
debugger

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
