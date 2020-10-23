// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，
// 但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
// 但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

function intSumEvery(array) {
    let sum = '',
        intSum = 0;
    array.forEach(item => {
        sum += item.toString();
    });
    sum = sum.split("");
    sum.forEach(item => {
        intSum += parseInt(item);
    })
    return intSum;
}

function movingCount(threshold, rows, cols) {
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            intSumEvery([i, j]) <= threshold ? count++ : null;
        }
    }
    return count;
}

module.exports = {
    movingCount: movingCount
}