let express = require('express');
let app = express();

app.get('/liwenli', (req, res)=>{
    res.send({liwenli: 'hello react'})
});
app.get('/api/liwenli', (req, res)=>{
    res.send('api liwenli hello react')
});
app.listen(7000);