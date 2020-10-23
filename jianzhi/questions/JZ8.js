//一只青蛙一次可以跳上1级台阶，也可以跳上2级。
//求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

// 递归即可，不过会造成运算过多，故用两个变量进行传递
// 注意初始值的问题，1为1，2为2，从3开始才是前两项之和
function jumpFloor(number) {
    if (number == 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    } else if (number == 2) {
        return 2;
    } else {
        let F = 2;
        let G = 1;
        number -= 2;
        while (number--) {
            F = F + G;
            G = F - G;
        }
        return F;
    }
}
module.exports = {
    jumpFloor: jumpFloor
};