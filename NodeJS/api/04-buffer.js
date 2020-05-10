
// 分配10字节
const buf1 = Buffer.alloc(10)

const buf2 = Buffer.from('a')
const buf3 = Buffer.from('中文')

//  合并 (实际是在内存里对二进制的数据进行操作) 
const buf4 = Buffer.concat([buf2,buf3])
// 调用tostring()方法默认转化为utf-8 
console.log(buf4, buf4.toString())