function main() {
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

    let arr = [
        [1, 2, 3, 4, 5],
        [2, 2, 4, 5, 6],
        [3, 4, 5, 6, 7]
    ]
    console.log(printMatrix(arr));
}
module.exports = main;