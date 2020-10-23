// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
//（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）

// 思路就是返回一个数组，这个数组里的元素是原数组中除去此位置元素的所有其他元素的乘积

function multiply(array) {
    return array.map((itemF, indexF) => {
        let result = 1;
        array.forEach((itemS, indexS) => {
            if (indexF != indexS) {
                result *= itemS;
            }
        });
        return result;
    })
}
module.exports = multiply;