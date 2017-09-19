import React, { Component } from 'react';
import Star from '../../Star';

export default class CommentItem extends Component {
    render() {
        let { username, comment, star } = this.props.data;
        return (
            <div className='comment-item'>
               <div>
               <i className='iconfont icon-people_fill'></i>
               <span>{username}</span>               
               </div>
                <Star star={star}/>
                <p>{comment}</p>
            </div>
        )
    }
}