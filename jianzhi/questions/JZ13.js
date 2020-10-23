//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
//所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reOrderArray(array) {
    // write code here
    var oddArr = [];
    var evenArr = [];
    while (array.length != 0) {
        var temp = array.shift();
        if (isOdd(temp)) {
            oddArr.push(temp);
        } else {
            evenArr.push(temp);
        }
    }
    while (oddArr.length != 0) {
        array.push(oddArr.shift());
    }
    while (evenArr.length != 0) {
        array.push(evenArr.shift());
    }
    return array;
}

function isOdd(n) {
    if (n % 2 == 0) return false;
    return true;
}
module.exports = {
    reOrderArray: reOrderArray
};