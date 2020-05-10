const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    const { url, method, headers } = request
    if(url === '/' && method === 'GET'){
      // 静态页面服务
      fs.readFile('index.html', (err,data)=> {
        if(err){
          response.writeHead(500, {'Content-Type':'text/html'})
        }
        response.statusCode = 200 
        response.setHeader('Content-Type', 'text/html')
        response.end(data)
      })
    }else if(url==='/user/list' && method === 'GET'){
      // Ajax服务
      response.writeHead(200,{
        'Content-Type': 'application/json'
      })
      response.end(JSON.stringify({
          name : 'laowang'
      }))
    }
    else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
      // 图片文件服务
      fs.createReadStream(`./${url}`).pipe(response)

    }
    else{
      response.statusCode = 404
      response.setHeader('Content-Type', 'text/plain;charset=UTF-8')
    }
})
server.listen(3001)
