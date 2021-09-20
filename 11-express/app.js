import express from 'express'

const app = express()

// all이면 어떤 HTTP Request로 보내든 항상 수행이 된다.
// 만약, /api/doc 과 같은 형태로 호출하면 처리 되지 않는다.
app.all('/api', (req, res, next) => {
    console.log('all')
    next()
})

// use의 경우 /hey 뿐 아니라 /hey/doc 를 호출하면 호출이 된다.
app.use('/hey', (req, res, next) => {
    console.log('use')
    next()
})

// 대신 요렇게 하면 호출 된다.
app.all('/api/*', (req, res, next) => {
    console.log('all/*')
    next()
})

// http://localhost:8080/sky/cindy/?keyword=bts
app.get('/', 
    (req, res, next) => {
        console.log('first')
        if (true) {
            return res.send('Hello')
        }
        res.send('HAHA')

        // next() // 다음 미들웨어를 호출해라
        // next('route') // 현재 함께 등록되어있는 배열을 무시하고 다음 미들웨어로 넘어가라
        // next(new Error('error')) // error 핸들링 (이후의 error handling 하는 미들웨어에서 catch 해서 처리 할 것이다.)
    }, (req, res, next) => {
        console.log('first2')
        next()
    })

app.get('/', (req, res, next) => {
    console.log('second')
})

// 위에서 아무도 처리하지 않았다면 이걸 타겠지.
app.use((req, res, next) => {
    res.status(404).send('Not available!')
})

// error를 핸들링 하는 middleware
app.use((error, req, res, next) => {
    console.error(error)
    res.status(500).send('Sorry, try later!')
})

app.listen(8080)
// IP: 서버가 network 상의 어디에 있는지 알 수 있음.
// Port: 서버의 어떤 Application에 접속 하기를 원하는지를 나타낸다.