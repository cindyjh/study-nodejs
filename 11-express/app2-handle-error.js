import express from 'express'
import fs from 'fs'
import fsAsync from 'fs/promises'

const app = express()

// request를 json으로 parse 하자
app.use(express.json())

app.get('/file1', (req, res) => {
    /*
    try {
        // 동기이다. 동기는 try catch로 감싸서
        const data = fs.readFileSync('/file.txt')
    } catch(error) {
        res.status(404).send('File not found')
    }
    */
    
    /*
    // 비동기이다. 비동기는 callback으로 error가 전달되었기 때문이다. 그래서 맨 하단의 Not available으로 가지 않는다.
    // express에서 사용하는 middleware chain은 동기적으로 연결되어있기 때문이다.
    // 그래서 callback에서 오류를 처리해준다.
    fs.readFile('.file1.txt', (err, data) => {
        if (err) {
            res.status(404).send('File not found')
        }
    })
    */

    // 그리고 또하나, 만약 callback이 아닌 이것도 try catch로 묶어서 error 처리를 하려고 하면
    // catch에 잡히지 않는다.
    try {
        fs.readFile('.file1.txt', (err, data) => {
            if (err) {
                // res.status(404).send('File not found')
            }
        })
    } catch (error) {
        res.status(404).send('File not found')
    }
    
})

app.get('/file2', (req, res, next) => {
    // promise도 마찬가지로 비동기이므로 catch에서 error 핸들링을 해줘야 한다.
    fsAsync
        .readFile('.file.txt')
        .then(data => {})
        .catch(next)
})

app.get('/file3', async (req, res) => {
    // await 자체는 동기적이나, 해당 middleware 자체가 promise이기 때문(async 함수이기 때문에)
    // error를 잡으려면 file4를 보시라
    const data = await fsAsync.readFile('.file.txt')
})

app.get('/file4', async (req, res) => {
    try {
        const data = await fsAsync.readFile('.file.txt')
    } catch(err) {
        res.status(404).send('File not found')
    }
})

// 위에서 아무도 처리하지 않았다면 이걸 타겠지.
app.use((req, res, next) => {
    res.status(404).send('Not available!')
})


// Error Handling이란
// 1. client가 요청한 request를 제대로 처리하지 못했다면 적절한 error message를 보내줘서 client에게 충분한 error message를 전달할 것
// 2. system 내부적으로 무언가 큰 문제가 발생하더라도 서버가 죽지 않도록 예외처리를 잘 하는 것

// error를 핸들링 하는 middleware
// 동기/비동기 적으로 error 처리를 어떻게 할 수 있는지, 주의해야 할 점은 무엇인지 알아보자.
app.use((error, req, res, next) => {
    console.error(error)
    res.status(500).json({message: 'Something went wrong'})
})

app.listen(8080)
// IP: 서버가 network 상의 어디에 있는지 알 수 있음.
// Port: 서버의 어떤 Application에 접속 하기를 원하는지를 나타낸다.