import express from 'express'
import postRouter from './router/post.js'
import userRouter from './router/user.js'

const app = express()
app.use(express.json()) // REST API -> Body parse
app.use(express.urlencoded({ extended: false })) // HTML Form에서 Submmit을 하게 되면 발생하는 request를 Body 안으로 자동으로 parse 해줌.

// http://expressjs.com/en/4x/api.html#express.static
const options = {
    dotfiles: 'ignore', // 숨겨진 파일은 무시
    etag: false,
    index: false,
    maxAge: '1d', // 캐시 기간
    redirect: false,
    setHeaders: function (res, path, stat) { // 헤더에 필요한 데이터를 추가
        res.set('x-timestamp', Date.now())
    }
}
app.use(express.static('public', options)) // public 안에 있는 모든 resource에 대해 접근이 가능하도록 한다.

app.use('/posts', postRouter)
app.use('/users', userRouter)

app.listen(8080)