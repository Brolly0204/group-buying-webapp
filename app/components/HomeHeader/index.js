import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default class HomeHeader extends Component {
    render() {
        return (
            <div className={'home-header back'}>
                <Link to={'/city'} className='city'>
                    {this.props.cityName}
                    <i className='iconfont icon-unfold'></i>
                </Link>
                <div className='search'>
                    <i className='iconfont icon-search'></i>
                    <input type="text" placeholder={'搜索商家、品类或商圈'}/>
                </div>
                <Link to='/login'>
                <div className='profile'>
                    <i className="iconfont icon-people"></i>
                </div>
                </Link>
            </div>
        )
    }
}
