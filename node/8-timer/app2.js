
// call stack 과 task queue를 넘나들을 수 있는 타이머
// global object 에 정의되어있기 때문에 따로 import 하지 않아도 된다.
console.log('code1');
console.time('timeout 0')
setTimeout(() => {
    console.timeEnd('timeout 0') // 정확히 0초가 보장되지 않음. callstack이 빌 때 까지 기다려야 하기 때문. ㅎ
    console.log('setTimeout 0');
}, 0);

// console.log('code2');
// setImmediate(() => {
//     console.log('setImmediate');
// }, 0);

// console.log('code3');
// process.nextTick(() => {
//     console.log('nextTick');
// }, 0);