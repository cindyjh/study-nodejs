 
const fs = require('fs')
// Buffers
// Fixed-size chunk of memory
// array of integers, byte of data

const buf = Buffer.from('Hi') // Hi 라는 문자열을 메모리에 올린다.
console.log(buf) // <Buffer 48 69> unicode 형태로 표현이 된다.
console.log(buf.length) // 2
console.log(buf[0]) // 72 - ascii code로 출력된다.
console.log(buf[1]) // 105 - ascii code로 출력된다.

console.log(buf.toString()) // 105 - ascii code로 출력된다.

// create
const buf2 = Buffer.alloc(2) // 메모리에서 두 덩이를 초기화 해 가져온다.
const buf3 = Buffer.allocUnsafe(2) // (faster) 기존에 다른 데이터가 들어있으나 사용되지 않는 메모리를 초기화하지 않고 가져온다.
buf2[0] = 72; // ascii code로 할당
buf2[1] = 105; // ascii code로 할당

console.log(buf2)
console.log(buf2.toString())

console.log(buf3) // 메모리가 여유롭지 않은 경우에 다른 값이 나올 수 있다.
buf2.copy(buf3) // buf2 에 있는 것을 buf3에 카피
console.log(buf3.toString()) 

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString())