const jwt = require('jsonwebtoken')

const secret = 'Pa$SQo6ycQ0PH7Taswvd$g*TcRNQ0lCN' // 권장되는 길이는 32byte
const token = jwt.sign({
    id: 'cindy',
    isAdmin: false,
    },
    secret,
    {
        expiresIn: 2 // seconds
    }
)

console.log(token)

setTimeout(() => {
    // 발급한 토큰은 https://jwt.io/ 에서 해독 할 수 있지만 
    // 임의로 내용을 변경한 것은 해독 할 수 없다.
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error, decoded)
    })
}, 3000)
