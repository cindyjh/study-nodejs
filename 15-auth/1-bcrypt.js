const bcrypt = require('bcrypt')

const password = 'abcd1234'
const hashed = bcrypt.hashSync(password, 10) // 서버에서는 비동기로 하는게 좋겠지

console.log(`password: ${password}, hashed: ${hashed}`)


const result = bcrypt.compareSync('abcd1234', hashed)
console.log(result)
