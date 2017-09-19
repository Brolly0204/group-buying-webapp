import React, { Component } from 'react';
import './index.less';

export default class ChooseCity extends Component {
    render() {
        return (
            <div className='choose-city'>
                <h3>选择城市</h3>
                <ul onClick={e => this.props.changeCity(e)}>
                    <li>北京</li>

                    <li>成都</li>

                    <li>重庆</li>

                    <li>广州</li>

                    <li>杭州</li>

                    <li>南京</li>

                    <li>上海</li>

                    <li>深圳</li>

                    <li>苏州</li>

                    <li>天津</li>

                    <li>武汉</li>

                    <li>西安</li>
                </ul>
            </div>
        )
    }
}