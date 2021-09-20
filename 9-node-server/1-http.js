const http = require('http')
const fs = require('fs')
// const http2 = require('http2') // https와 함께 적용이 되므로 개발 시에는 ....
// 나중에 배포할 때 http2로 바꿀 것이다.

// console.log(http.STATUS_CODES)
// console.log(http.METHODS)

const server = http.createServer((req, res) => {
    console.log('incoming...')
    console.log(req.headers)
    console.log(req.httpVersion)
    console.log(req.method)
    console.log(req.url)

    const url = req.url
    res.setHeader('Content-Type', 'text/html')

    if (url === '/') {
        fs.createReadStream('./html/index.html').pipe(res)
        // res.setHeader('Content-Type', 'text/html')
        // res.write('<html>')
        // res.write('<head><title>Academy</title></head>')
        // res.write('<body><h1>Welcome!</h1></body>')
        // res.write('</html>')
        // res.end()
    } else if (url === '/courses') {
        fs.createReadStream('./html/courses.html').pipe(res)
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res)
    }

})

server.listen(8080)