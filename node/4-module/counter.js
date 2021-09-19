let count = 0;

function increse() {
    count++;
}

function getCount() {
    return count;
}

module.exports.getCount = getCount;
// module.exports.increse = increse;
exports.increse = increse; // 바로 exports 에 등록이 가능하긴 한데,
exports = {}; // 이렇게 초기화를 해버리면 이후에는 exports 에 등록이 불가능하다.

console.log(module)