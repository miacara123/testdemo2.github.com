var outputVal = 0; // 输出量
var increment = 1; // 增量

// 设置输出值
function setOutputVal (val) {
    outputVal = val;
}
// 设置增量
function setIncrement (incrementVal) {
    increment = incrementVal;
}
// 输出
function printNextCount () {
    outputVal += increment;
    console.log(outputVal);
}

function printOutputVal () {
    console.log(outputVal);
}

exports.setOutputVal = setOutputVal;
exports.setIncrement = setIncrement;

module.exports.printNextCount = printNextCount;