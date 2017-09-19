import React, { Component } from 'react';
import './index.less';

export default class Star extends Component {
    constructor(props) {
        super(props);
        let star = [];
        for(let i = 1; i <= 5; i++) {
            star.push(i);
        }
        this.state = {star};
    }
    render() {
        return (
            <div className="star-container">
              {
                 this.state.star.map(item => (
                     <i className={'iconfont icon-xing' +(item <= this.props.star? ' active': '')}></i>
                 ))


              }
            </div>
        )
    }
}