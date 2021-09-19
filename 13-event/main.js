const logger = require('./logger.js')

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// EventEmitter는 한 번 객체를 만들면, 그 객체 내에서 발생하는 이벤트에 한해서만 listening 한다.
// 여러개의 event emitter를 만들면 다른 객체에서 발생하는 event는 listening 할 수 없다.
const emitter = new logger.Logger()

emitter.on('log', (event) => {
    console.log(event)
})

emitter.log(() => {
    console.log('.... doing something!')
})