const fs = require('fs')

// 아래 처럼 모든 데이터를 다 읽어온 뒤 쓰는 것은 비효율적이다.
const beforeMem = process.memoryUsage().rss
fs.readFile('./file.txt', (_, data) => {
    fs.writeFile('./file2.txt', data,  () => {})

    // Calculate
    const afterMem = process.memoryUsage().rss
    const diff = afterMem - beforeMem
    const consumed = diff / 1024 / 1024
    console.log(diff)
    console.log(`Consumed Memory: ${consumed}MB`)
})