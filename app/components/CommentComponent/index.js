import React, { Component } from 'react';
import CommentItem from './subpage/CommentItem'
import './index.less';

export default class CommentComponent extends Component {
    render() {
        return (
            <div className='comment-component'>
              {
                  this.props.data.map((item, ind) => (
                      <CommentItem data={item} key={ind}/>
                  ))
              }
            </div>
        )
    }
}