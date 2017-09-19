import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.less';

class MHeader extends Component {
    handleBack = () => {
        let {backPath} = this.props; // 如果指定了返回路径 就跳转到指定路径
        if(backPath) {
            return this.props.history.push(backPath)
        } 
        this.props.history.goBack();
    };
    render() {
        return (
            <div className='m-header'>
               <i className='iconfont icon-fanhui go_back' onClick={this.handleBack}></i>
            <span>{this.props.title}</span>
            </div>
        )
    }
}
MHeader.propTypes = {
    backPath: PropTypes.string
}
export default withRouter(MHeader)