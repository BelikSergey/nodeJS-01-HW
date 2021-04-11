const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    res.writeHead(200,{ 'Content-type': 'text/plain'})
    res.write('hello ')
    res.end()
}).listen(3000, () => {
    console.log('слушаю порт 3000');
})