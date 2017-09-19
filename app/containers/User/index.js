import React, { Component } from 'react';
import MHeader from '@/components/MHeader'
import { connect } from 'react-redux'
import './index.less'
import UserInfo from '@/components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends Component {
    render() {
        return (
            <div className='user-container'>
                <MHeader title='用户信息' backPath='/' />
                <UserInfo {...this.props.userInfo} />
                {/* 订单列表
                 this.props.userInfo.username
                  */}
                
                {
                    true ? <OrderList username={'react'} /> : null
                }

            </div>
        )
    }
}
export default connect(
    state => ({ ...state })
)(User);
