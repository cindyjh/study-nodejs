const process = require('process');

console.log(process.execPath)
console.log(process.version)
console.log(process.pid)
console.log(process.ppid)
console.log(process.platform)
console.log(process.env)
console.log(process.uptime())
console.log(process.cwd())
console.log(process.cpuUsage())

// 해당 파일 내에 있는 모든 함수를 실행시킨 뒤
// 0초 있다가  callback 함수를 실행시켜달라
setTimeout(() => {
    console.log('setTimeout');
}, 0)

// 현재 수행되고 있는 코드가 다 완료된 다음에 내가 등록한 callback 함수를 task queue에 넣어주렴
// call stack 에 있는 
// task queue 에 다른 콜백함수가 들어있어도 그 순서를 무시하고 해당 task queue 제일 앞부분에 넣는다.
// 그래서 위의 setTimeout 보다 더 먼저 호출됨
process.nextTick(() => {
    console.log('nextTick');
})

for(let i = 0; i < 100; i++) {
    console.log('for loop')
}