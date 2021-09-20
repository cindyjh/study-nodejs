import express from 'express'

const app = express()

// http://localhost:8080/sky/cindy/?keyword=bts
app.get('/sky/:id', (req, res, next) => {
    // console.log(req.path)
    // console.log(req.headers)
    console.log(req.params)
    console.log(req.params.id)
    console.log(req.query)
    console.log(req.query.keyword)

    // res.send('Hi!')
    // res.json({name: "cindy"})
    // res.sendStatus(400)

    res.setHeader('key', 'value')
    res.status(201).send('created')
})

app.listen(8080)
// IP: 서버가 network 상의 어디에 있는지 알 수 있음.
// Port: 서버의 어떤 Application에 접속 하기를 원하는지를 나타낸다.