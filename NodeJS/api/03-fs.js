const fs = require('fs')

// 同步调用
const data = fs.readFileSync('./download.js')
// data     输出的是buffer类-二进制的数据
console.log(data.toString())


// 异步调用
fs.readFile('./download.js',(err,data)=> {
  if(err) throw err
  console.log(data)
})