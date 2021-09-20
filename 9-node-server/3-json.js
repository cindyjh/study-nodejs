const http = require('http')
const fs = require('fs')

const courses = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JS' },
    { name: 'Node' },
]

const server = http.createServer((req, res) => {
    const url = req.url // what do you want
    const method = req.method // how?, action ?
    if (url === '/courses') {
        if (method === 'GET') {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(courses))
        } else if (method === 'POST') {
            const body = [];
            req.on('data', chunk => {
                console.log(chunk);
                body.push(chunk)
            })

            req.on('end', () => {
                const bodyStr = Buffer.concat(body).toString()
                const course = JSON.parse(bodyStr)
                courses.push(course)
                console.log(courses)
                res.writeHead(201)
                res.end()
            })
        }
    }
})

server.listen(8080)