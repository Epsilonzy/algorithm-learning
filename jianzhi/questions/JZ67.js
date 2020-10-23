// 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），
// 每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，
// 我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

//解法：
// 使用数学进行解题
// 当n>3时
// result = 4*(3)^((x-4)/3) (当 x%n = 1时)
// result = 2*(3)^((x-2)/3) (当 x%n = 2时)
// result = 3^((x)/3) (当x%n = 3时)

function cutRope(number) {
    if (number == 1) {
        return 1;
    } else if (number == 2) {
        return 1;
    } else if (number == 3) {
        return 2;
    } else if (number > 3) {
        switch (number % 3) {
            case 0:
                return Math.pow(3, number / 3);
            case 1:
                return 4 * Math.pow(3, (number - 4) / 3);
            case 2:
                return 2 * Math.pow(3, (number - 2) / 3);
        }
    }
}
module.exports = cutRope;