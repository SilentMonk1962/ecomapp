import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

//This is what we will use to wrap around our app. This becomes parent of our application. 
//It will help us access the store across all our component. 

import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
, document.getElementById('root'));
