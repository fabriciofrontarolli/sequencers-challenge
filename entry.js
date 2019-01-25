import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducers from './src/reducers';

const store = createStore(rootReducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
