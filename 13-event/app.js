
// Node js 는 컴퓨터 위에서 동작하는 Javascript Runtime 환경이기 때문에 우리가 브라우저 환경에서는 할 수 없었던 OS, Processor, Path, File System, Buffer, Stream 같은 일을 할 수 있다. 입/출력에 관련된 것은 Non-Blocking 이기 때문에 callback 을 등록하거나, Promise 형태로 비동기 처리가 가능하다.

// custom event를 만들 수 있다.

const EventEmitter = require('events')
const emitter = new EventEmitter()

const callback1 = (args) => {
    console.log('first callback - ', args)
}
emitter.on('cindy', callback1)

emitter.on('cindy', (args) => {
    console.log('second callback - ', args)
})

emitter.emit('cindy', { message: 1})

emitter.removeListener('cindy', callback1)
emitter.emit('cindy', { message: 2})
emitter.removeAllListeners()
emitter.emit('cindy', { message: 3})