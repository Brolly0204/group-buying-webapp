import React, { Component } from 'react';
import { Avatar } from 'antd';
import './index.less';

export default class UserInfo extends Component {
    render() {
        let { username, cityName } = this.props
        return (
            <div className='user-info'>
                <Avatar size="large" src='https://www.vue-js.com/public/images/vue.png'
                />
                <div>用户 {username}</div>
                <div>地点 {cityName}</div>
            </div>
        )
    }
}
