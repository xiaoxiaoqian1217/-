### Node.js 基础
* node中的模块系统使用
* node中的api使用
* 实战cli工具

##### 与前端的不同
* js核心语法不变
* 前端BOM DOM`
* fs http buffer event os

##### 运行node 程序
* 运行：`node  文件名`
*  运行`nodemon  01-run.js` 
> ```npm i -g nodemon```
安装nodemon监视js文件的改动，自动重启

#####  模块
* 内置模块
 ```
const os = require('os')
const mem = os.freemem() / os.totalmem * 100
console.log(`内存占用率${mem.toFixed(2)}%`)
 ```
* 第三方模块
  + 从git中下载项目
    >
    ```npm i download-git-repo -s```

    > 
      ```
      const download = require('download-git-repo')
      download('github:su37josephxia/vue-template','test',err => {
        console.log(err ? 'err': 'success')
      })
      ```
  + 优化代码
    >   终端中通过一系列的命令行才输出成功或失败，我们可以通过ora中的procees(第三方库)让显示更加的优雅

    ```
    const download = require('download-git-repo')
    const ora = require('ora')
    const process = ora('下载项目...')
    process.start()
      download('github:su37josephxia/vue-template','test',err => {
        if(err){
          process.fail()
        }else{
          process.succeed()
        }
      })
    ```
  + promisefy
  >   更优雅的回调函数,把异步回调的方法改为返回Promise实例的方法。
  ```
  const repo = 'github:su37josephxia/vue-template'
  const desc = 'test'
  clone(repo, desc)
  async function clone() {
    process.start()
    try {
      await download(repo, desc)
    } catch (error) {
      process.fail()
    }
    process.succeed()
  }
  ```
  
* 自定义模块
  > 代码分割，复用手段.  
  ```
  module.exports.clone = async function(repo, desc){
    const { promisify } = require('util')
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora('下载项目...')
    process.start()
    try {
      await download(repo, desc)
    } catch (error) {
      process.fail()
    }
    process.succeed()
  }
  ```
##### 核心的api
  * fs - 文件系统
    > 同步或者异步调用文件，解析的文件都用二进制表示
    + 同步调用：会阻塞`fs.readFileSync(fileUrl)`
    + 异步调用：可以利用promisify`fs.readFile(fileUrl,callback)`

* Buffer
  > 实际上是二进制数据的表示

* http
  > 用于创建web服务的模块
   + 创建一个http服务器
   + 显示首页
   + 编写一个接口
* stream
  >  用于在node中流数据交互的接口
  
  request header 中的 `Accpet: text/xml` 表示客户端期望接受的数据格式是xml格式的
  reponse header 中的`Content-Type: text/html` 表示服务端发送的数据格式是html格式的


 








 









  
