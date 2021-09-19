
const fs = require('fs')

const data = [];

// event based method
// on method는 this를 return 하기 때문에 chaining을 할 수 있음.
const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 한 번에 얼마만큼의 데이터를 읽어올 수 있는지 정할 수 있다.(default: 64 kbytes)
    // encoding: 'utf-8'
}).on('data', chunk => {
    //console.log(chunk)
    data.push(chunk)
    console.count('data')
}).on('end', () => {
    console.log(data.join(''))
}).on('error', error => {
    console.log(error);
})