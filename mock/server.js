let express = require('express');
let app = express();
let bodyPraser = require('body-parser');
app.listen(7000,() => console.log('监听7000端口'));

app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended: true}))

// 广告接口
let ad = require('./home/ad');
app.get('/ad', (req, res) => {
    res.send(ad);
});

// 商品列表 需要传递城市
let list = require('./home/list');
app.get('/list/:city/:page', (req, res) => {
    // console.log(req.params.city);
    // console.log(req.params.page);
    res.send(list);
});

// 商户信息 id
let info = require('./detail/info');
app.get('/detail/info/:id', (req, res) => {
    console.log(req.params.id);
   res.send(info);
});

// 获取评论列表 id  page 页码
let comment = require('./detail/comment');
app.get('/detail/comment/:id/:page', (req, res) => {
    console.log(req.params.id);
    console.log(req.params.page);
    res.send(comment);
});

// 订单列表
let orderList = require('./orderlist/orderList');
app.get('/orderlist/:id', (req, res) => {
    res.send(orderList)
})

// 提交评论
app.post('/comment', (req, res) => {
    res.send(req.body);
});