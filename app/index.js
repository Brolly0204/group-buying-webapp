import React, {Component} from 'react';
import {render} from 'react-dom';
import App from "./containers/index"; // root component (根组件中控制显示哪一个页面)
import './common/index.less'
import store from './redux/store';
import {Provider} from 'react-redux';

window._store = store;
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
