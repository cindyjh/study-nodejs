import express from 'express'
import cors from 'cors'


const app = express()
app.use(express.json()) // REST API -> Body parse
app.use(express.urlencoded({ extended: false })) // HTML Form에서 Submmit을 하게 되면 발생하는 request를 Body 안으로 자동으로 parse 해줌.

// ### CORS Policy

// - 브라우저에서만 가지고 있는 정책
// - client와 server가 동일 IP에서 동작하고 있다면 resource를 별다른 제약 없이 서로 주고받을 수 있다.
// 하지만 서버와 클라이언트가 서로 다른 IP에 있다면 원칙적으로 그 어떤 데이터도 주고받을 수 없다.
// - 클라이언트와 서버가 다른 도메인일 때 데이터를 주고받을 수 있으려면 서버애서 response를 보낼 때 'Access-Control-Allow-Origin'을 Header에 추가해줘야 한다.
/*
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, DELETE'
    )
    next() // next 중요해 ... ! 
})
*/
// 위처럼 하지 않고 cors 패키지를 설치해 cors를 등록해주기만 하면 된다.
app.use(cors({
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true // 헤더에 사용자 정보 추가 허용 ( Access-Control-Allow-Credentials: true 헤더가 설정되는 것과 동일하다.)
}))

app.use('/', (req, res, next) => {
    console.log('test')
    res.send('Welcome')
})

app.listen(8080)