//一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 解法:递归 f(n)=2*f(n-1)(n>=2)

function jumpFloorII(number) {
    if (number == 1) {
        return 1;
    } else if (number >= 2) {
        return 2 * jumpFloorII(number - 1);
    }
}
module.exports = {
    jumpFloorII: jumpFloorII
};