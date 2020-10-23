// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n<=39 


function Fibonacci(n) {
    // 递归，时间过长,运算次数太多了
    // if (n == 0) {
    //     return 0;
    // } else if (n == 1) {
    //     return 1;
    // } else {
    //     return Fibonacci(n - 1) + Fibonacci(n - 2);
    // }
    // 牺牲空间换时间
    // let array = [];
    // for (let i = 0; i < n; i++) {
    //     if (i == 0) {
    //         array[i] = 0;
    //     } else if (i == 1) {
    //         array[i] = 1;
    //     } else {
    //         array[i] = array[i - 1] + array[i - 2];
    //     }
    // }
    // if (n > 1) {
    //     return array[n - 1] + array[n - 2];
    // } else if (n == 1) {
    //     return 1;
    // } else {
    //     return 0;
    // }
    // 只用两个变量来传递
    let f = 0;
    let s = 1;
    while (n--) {
        f = f + s;
        s = f - s;
    }
    return f;
}
module.exports = {
    Fibonacci: Fibonacci
};