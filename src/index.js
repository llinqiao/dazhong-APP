import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import App from './containers/App';
import './index.css'



ReactDOM.render(
<Provider store ={store}>

<App /> 

</Provider>,
document.getElementById('root')
);


