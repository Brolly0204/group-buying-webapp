import React, { Component } from 'react';
import MHeader from "../../components/MHeader/index";
import Buy from "../../components/Buy";
import Info from "./subpage/Info";
import Comment from './subpage/Comment'
export default class Detail extends Component {
    render() {
        return (
            <div className='detail-container' style={{paddingTop: 48}}>
                {/* 头部 */}
                <MHeader title={'商户详情'}/>
                {/* 商户信息 */}
                <Info/>
                {/* 收藏和购买 */}
                <Buy/>
                {/* 评论 */}
                <Comment id={this.props.match.params.id} />
            </div>
        )
    }
}
