//在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

//思路:如果是混乱数组，那么只能双重循环，不过这里每一行每一列都是递增，可以使用折半查找算法
function Find(target, array) {
    array.some(item => {
        return item.some(e => {
            return e === target
        })
    })
}
module.exports = {
    Find: Find
};