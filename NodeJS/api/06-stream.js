const fs = require('fs')

// 读流
const rs2 = fs.createReadStream('./img.jpg')

// 写流
const ws = fs.createWriteStream('./img2.png')
// pipe 管道的意思   可以复制一张img2的图片
rs2.pipe(ws)