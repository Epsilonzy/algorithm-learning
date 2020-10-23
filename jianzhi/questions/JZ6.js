//把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

function minNumberInRotateArray(rotateArray) {
    // write code here
    //二分查找法

    if (rotateArray.length == 0) {
        return 0;
    }
    let low = 0,
        high = rotateArray.length - 1;
    while (low < high) {
        let mid = parseInt((low + high) / 2);
        if (rotateArray[mid] < rotateArray[high]) {
            high = mid;
        } else if (rotateArray[mid] == rotateArray[high]) {
            hight = high - 1;
        } else {
            low = mid + 1
        }
    }
    return rotateArray[low];
}
module.exports = {
    minNumberInRotateArray: minNumberInRotateArray
};