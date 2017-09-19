import React, { Component } from 'react';
import './index.less';

export default class Loading extends Component {
    render() {
        return (
            <div className='loading-container'>
                <div className='loader'>
                    <i className='iconfont icon-wsmp-loading'></i>
                    <span>加载中...</span>
                </div>
            </div>

        )
    }
}
