import { get, postForm } from '../index';

// 获取用户订单
export const getOrderList = username => {
    return get('/api/orderlist/' + username);
}
// 提交评论
export const commitComment = obj => {
    return postForm('/api/comment', obj);
}