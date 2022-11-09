const http = require("http");
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json;');
  res.setHeader("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  console.log(req.url);
  console.log(req.method);
  if (req.method == 'OPTIONS') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, sessionToken',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
    });
    res.end('');
  }

  const list = [{ name: 'products1', price: 20 }, { name: 'products2', price: 30 }]

  if (req.method === 'GET' && req.url === '/api/getData') {
    res.write(JSON.stringify({ status: 200, data: { list: list, title: '商品页面' } }));
    res.end();
  }

  if (req.method === 'POST' && req.url === '/api/setData') {
    let items = '';
    req.on('data', function (chunk) {
      if (chunk) {
        items += chunk.toString();
      }
    });
    req.on('end', function () {
      let item = JSON.parse(items);
      //处理你的业务逻辑...
      if (item && item.add) {
        list.push(list.at(-1))
        res.write(JSON.stringify(list));
        res.end();
      }
    });
  }

}).listen(3001, () => {
  console.log('监听在3001 ！');
});
