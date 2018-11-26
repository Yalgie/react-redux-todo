import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers/main'
import App from './components/App';
import './sass/main.scss';

const store = createStore(
    reducers,
    window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);