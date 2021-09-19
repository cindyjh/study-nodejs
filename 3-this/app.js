function hello() {
    // console.log(this)
    console.assert(this == global, "??????") // 왜 이건 . .?
    console.log(this === global)
}

hello()

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('---A class---')
        console.log(this)
        console.log(this === global)
    }
}

const a = new A(1);
a.memberFunction()

console.log('--- global scope --- ');
console.log(this); // 브라우저에서는 window 객체임.
console.log(this === module.exports) // node 에서는 module.exports 객체이다.