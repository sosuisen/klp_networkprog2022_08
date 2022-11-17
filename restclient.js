const http = require('http');

// 実行例
// node restclient.js GET todos
// node restclient.js POST todos {\"title\":\"仕上げ\"}
// node restclient.js PUT todos/2 {\"completed\":true}
// node restclient.js DELETE todos/2

const host = 'localhost';
const port = 8080;
const apiEndPoint = '/api/';

// コマンドライン引数の取得
let method, resource, userData;
// 配列の「分割代入」を利用します
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[, , method, resource, userData] = process.argv;

const req = http.request(
    {
        host,
        port,
        path: apiEndPoint + resource,
        method,
    },
    res => {
        let responseData = '';
        console.log(`statusCode: ${res.statusCode}`);
        if (res.statusCode.toString().match(/20\d/)) {
            res.on('data', chunk => responseData += chunk);
            res.on('end', () => {
                const obj = JSON.parse(responseData)
                console.log(obj);
            });
        }
    });

if (method === 'POST' || method === 'PUT') req.write(userData);

req.end();
