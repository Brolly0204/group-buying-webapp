import React, { Component } from 'react';
import { getComment } from '@/api/detail/index.js'
import CommentComponent from '@/components/CommentComponent'
import Loading from '@/components/Loading'
import LoadMore from '@/components/LoadMore';
import './index.less';

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            hasMore: true,
            data: [],
            isLoading: true
        }
    }
    render() {
        return (
            <div className='comment-container'>
                <h3>用户评价</h3>
                {
                    this.state.data.length ? <CommentComponent data={this.state.data} /> : <Loading />
                }
                <LoadMore
                    hasMore={this.state.hasMore}
                    isLoading={this.state.isLoading}
                    loadMore={this.loadMore} />
            </div>
        )
    }
    componentDidMount() {
        this.processData(getComment(this.props.id, 0));
    }
    loadMore = () => {
        if (this.state.isLoading) return;
        this.setState({
            isLoading: true,
            page: this.state.page + 1
        }, () => {
            this.processData(getComment(this.props.id, this.state.page));
        })
    }
    processData(result) {
        setTimeout(() => {
            result.then(({ hasMore, data }) => {
                this.setState({
                    hasMore,
                    data: [...this.state.data, ...data],
                    isLoading: false,
                })
            });
        }, 500)
    }
}