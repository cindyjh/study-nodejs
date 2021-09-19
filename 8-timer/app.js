

// call stack 과 task queue를 넘나들을 수 있는 타이머
// global object 에 정의되어있기 때문에 따로 import 하지 않아도 된다.


let num = 1;
const interval = setInterval(() => {
    console.log(num++);
}, 1000);

setTimeout(() => {
    console.log('Timeout!');
    clearInterval(interval);
}, 6000)