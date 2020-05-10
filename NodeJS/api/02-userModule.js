// const os = require('os')
// const mem = os.freemem() / os.totalmem * 100
// console.log(`内存占用率${mem.toFixed(2)}%`)


// const { promisify } = require('util')
// const download = promisify(require('download-git-repo'))
// const ora = require('ora')
// const process = ora('下载项目...')
// const repo = 'github:su37josephxia/vue-template'
// const desc = 'test'
// clone(repo, desc)
// async function clone() {
//   process.start()
//   try {
//     await download(repo, desc)
//   } catch (error) {
//     process.fail()
//   }
//   process.succeed()
// }

const repo = 'github:su37josephxia/vue-template'
const desc = 'test'
const {clone} = require('./download')
clone(repo,desc)
