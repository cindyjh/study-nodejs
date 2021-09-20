console.log('hello');
console.log('저장용!')

// const _ = require('underscore')

// 💩
const array = [1, 2]
// _.forEach(array, (num) => console.log(num))

// 최신 js에서는 foreach를 지원하지.
array.forEach(num => console.log(num))