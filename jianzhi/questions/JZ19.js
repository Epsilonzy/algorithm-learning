//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
//例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix) {
    // write code here
    let list = []
        //宽高初始值
    let width = matrix[0].length;
    let height = matrix.length;

    let circle = width < height ? width / 2 : height / 2;
    if (circle > parseInt(circle)) {
        circle = parseInt(circle) + 1;
    }
    for (let i = 0; i < circle; i++) {

        //第上行
        for (let j = i; j < width; j++) {
            list.push(matrix[i][j])
                // console.log(matrix[i][j]);
        }
        //最右列
        for (let j = i + 1; j < height; j++) {
            list.push(matrix[j][width - 1]);
            // console.log(matrix[j][width - 1]);
        }
        //最下行
        if (i != height - 1) {
            for (let j = width - 1 - 1; j >= i; j--) {
                list.push(matrix[height - 1][j])
                    // console.log(matrix[height - 1][j]);
            }
        }
        //最左列
        if (i != width - 1) {
            for (let j = height - 2; j >= i + 1; j--) {
                list.push(matrix[j][i])
                    // console.log(matrix[j][i]);
            }
        }
        width--;
        height--;
    }
    return list;
}
module.exports = {
    printMatrix: printMatrix
};