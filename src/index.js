import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import reduxThunk from 'redux-thunk';

ReactDOM.render(<Provider store = {createStore(reducer,applyMiddleware(reduxThunk))}>
        <App/>
    </Provider>
,document.querySelector('#root'));