const fs = require('fs')
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 한 번에 얼마만큼의 데이터를 읽어올 수 있는지 정할 수 있다.(default: 64 kbytes)
    // encoding: 'utf-8'
})

const zlibStream = zlib.createGzip();

const writeStream = fs.createWriteStream('./file4.zip'); // './file4.txt'

// stream의 데이터를 읽어오면서 읽어온 데이터를 연결한다.
// readStream 의 데이터를 받아서 writeStream에 연결해준다.
// 중간에 zlibStream을 넣어 중간에 압축을 하게 할 수 있다.
// 최종적으로 writeStream에 기록되는 것은 readStream에서 읽어온 것을 압축 한 데이터가 기록된다.
const piping = readStream.pipe(zlibStream).pipe(writeStream)

piping.on('finish', () => {
    console.log('done!!')
})

const http = require('http')
const server = http.createServer((req, res) => {
    // 파일을 모두 읽은 다음에 메모리에 들어온 데이터를 res에 보내준다.
    // fs.readFile('file.txt', (err, data) => {
    //     res.end(data)
    // })
    // 위 방법 보다는 stream을 이용해서 stream 자체를 res에 piping 해서 보여주는게 좋다.
    const stream = fs.createReadStream('./file.txt')
    stream.pipe(res)
})

server.listen(3000)