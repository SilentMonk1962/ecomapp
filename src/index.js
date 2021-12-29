import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
<<<<<<< HEAD

ReactDOM.render(
<Provider>
=======
import store from './redux/store';

ReactDOM.render(
<Provider store={store}>
>>>>>>> 542765ea55f1efbc0403506a17b25d83c95ac890
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
, document.getElementById('root'));
