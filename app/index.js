import React, { Component } from 'react';
import { render } from 'react-dom';
import App from "./containers/index"; // root component (根组件中控制显示哪一个页面)
import './common/index.less'

render(
    <App/>,
    document.getElementById('app')
);
