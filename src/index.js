import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import App from './components/app';
import './index.css';

const store = createStore(reducers);

// state changed log
const subscribe = store.subscribe(() => {
    console.log('state changed', store.getState());
});

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
