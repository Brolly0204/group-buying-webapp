import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.less'

export default class OrderListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentState: props.data.commentState
    };

  }
  componentDidMount() {
    console.log(this.context);

  }
  static contextTypes = {
      commitComment: PropTypes.func
  }
  render() {
    let {
      id,
      img,
      title,
      count,
      price,
      commentState
    } = this.props.data;
    return (
      <div className='order-list-container'>
        <div className='order-list-item'>
          <div className='order-list-img'>
            <img src={img}/>
          </div>
          <div className='order-list-info'>
            <h3>商户：{title}</h3>
            <span>数量：{count}</span>
            <span>价格：{price}</span>
          </div>
          <div className='order-list-evaluate'>
            {this.state.commentState === 0
              ? <button className='order-btn' onClick={this.changeCommentState.bind(this)}>评价</button>
              : (this.state.commentState === 1
                ? ''
                : <button className='btn-unselect' disabled>已评价</button>)
}

          </div>
        </div>
        { this.state.commentState === 1
          ? <div className='order-list-comment'>
              <textarea className='comment-text' ref={c=>this.comment=c}/>
              <button type="button" onClick={this.sureCommit.bind(this)}>确认</button>
              <button type="button" onClick={this.cancel.bind(this)}>取消</button>
            </div>
          : ''
}

      </div>
    )
  }
  sureCommit() {
    this.context.commitComment(this.props.data.id, this.comment.value, this.changeState.bind(this));
  }
  changeState () {
     console.log(this);
     this.setState({commentState: 2})
  }
  changeCommentState() {
     this.setState({commentState: 1})
  }
  cancel() {
    this.setState({commentState: 0})
  }
}
