import React, { Component } from 'react';
import { getOrderList, commitComment } from '@/api/orderlist'
import PropTypes from 'prop-types'
import OrderListComponent from '@/components/OrderListComponent'
import Loading from '@/components/Loading'
import './index.less'

export default class OrderList extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  static childContextTypes = {
    commitComment: PropTypes.func
  }
  componentDidMount() {
    getOrderList(this.props.username).then(data => {
      this.setState({ data });
    })
  }
  getChildContext() {
    return {
      commitComment: this.commitComment
    }
  }
  render() {
    return (
      <div className='order-list'>
        <h2>订单列表</h2>
        {
          this.state.data.length > 0 ? <OrderListComponent data={this.state.data} /> : <Loading />
        }
      </div>
    )
  }
  // 提交评价内容 传给orderlistitem 客户id  内容 callback更改评价状态
  commitComment = (id, comment, callback) => {
    commitComment({ id, comment }).then(data => {
      console.log(data);
      callback();
    })
  }

}

OrderList.propTypes = {
  username: PropTypes.string.isRequired
}
