//在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。
//也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
// 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。


function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    //使用一个访问数组,长度与numbers一样为n,牺牲空间换时间,时间复杂度为O(n),空间复杂度为n
    let vis = [];
    duplication[0] = -1;
    for (let i = 0; i < numbers.length; i++) {
        vis[0] = false;
    }
    try {
        numbers.forEach(item => {
            if (vis[item]) {
                duplication[0] = item;
                throw new Error('');
            } else {
                vis[item] = true;
            }
        })
    } catch (e) {

    }
    if (duplication[0] != -1) {
        return true;
    } else {
        return false;
    }
}
module.exports = duplicate;