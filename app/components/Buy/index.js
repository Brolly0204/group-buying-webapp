import React, { Component } from 'react';
import './index.less';

export default class Buy extends Component {
    render() {
        return (
            <div className='buy-container'>
                <button>收藏</button>
                <button>购买</button>
            </div>
        )
    }
}