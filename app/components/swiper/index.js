import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import './index.less'

export default class Swiper extends Component {
    constructor() {
        super();
        this.state = {n: 0}
    }
    render() {
        let opts = {
            // continuous: false,
            callback:(n)=>{
                this.setState({n})
            },
            auto: 3000
        };
        return (
            <div className='swiper-container'>
                <ReactSwipe className='carousel' swipeOptions={opts}>
                    <div>
                        <ul>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                            <li>
                                <i className='iconfont icon-youxian'></i>
                                <span>周边游</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                            <li>
                                <i className='iconfont icon-canyin'></i>
                                <span>餐饮</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                            <li>
                                <i className='iconfont icon-gouwu'></i>
                                <span>购物</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className='dots'>
                    <li className={this.state.n === 0? 'active':''}></li>
                    <li className={this.state.n === 1? 'active':''}></li>
                    <li className={this.state.n === 2? 'active':''}></li>
                </ul>
            </div>
        )
    }
}
