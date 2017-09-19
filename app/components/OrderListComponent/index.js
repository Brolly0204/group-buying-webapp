import React, {Component} from 'react';
import OrderListItem from './subpage/OrderListItem'

export default class OrderListComponent extends Component{
    render() {
      return (
        <div>
          <div>
            {
              this.props.data.map((item, ind) => (
                 <OrderListItem key={ind} data={item}/>
              ))
            }
          </div>
        </div>
      )
    }
}
