import React, { Component } from 'react';
import { getList} from "@/api/home/index";
import ListComponent from "../../../components/ListComponent/index";
import Loading from "../../../components/Loading/index";
import LoadMore from "../../../components/LoadMore/index";

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            hasMore: true,
            data: [],
            page: 0,
            isLoading: true
        }
    }
    componentWillMount() {

    }
    // 加载更多处理函数 传递给LoadMore
    loadMore = (e) => {
        if(this.state.isLoading) return;
        this.setState({
            page: this.state.page + 1,
            isLoading: true
        }, () => {
            this.processData(getList(this.props.cityName, this.state.page));
        });
    };

    render() {
        return (
            <div className='list-container'>
                <div className='list-container-title'>猜你喜欢</div>
                {
                    this.state.data.length ? <ListComponent data={this.state.data}/> : <Loading/>
                }
                <LoadMore loadMore={this.loadMore}
                          hasMore={this.state.hasMore}
                          isLoading={this.state.isLoading}
                />
            </div>
        )
    }
    componentDidMount() {
        this.processData(getList(this.props.cityName, 0));
    }
    
    processData(result) { // 处理列表数据
        result.then(({hasMore, data}) => {
            this.setState({
                hasMore,
                data: [...this.state.data, ...data],
                // data: this.state.data.concat(data)
                isLoading: false
            })
        });
    }
}

