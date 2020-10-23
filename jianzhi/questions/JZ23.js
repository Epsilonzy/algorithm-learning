//输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回true,否则返回false。
//假设输入的数组的任意两个数字都互不相同。

function VerifySquenceOfBST(sequence) {
    // write code here
    if (sequence.length == 0) {
        return false;
    }
    if (sequence.length == 1) {
        return true;
    }
    let root = sequence.pop(),
        left = [],
        right = [],
        status = true;
    // console.log(sequence);
    while (sequence.length != 0) {
        let temp = sequence.shift();
        if (temp < root) {
            left.push(temp);
        } else {
            sequence.unshift(temp);
            break;
        }
    }
    while (sequence.length != 0) {
        let temp = sequence.shift();
        if (temp > root) {
            right.push(temp);
        } else {
            status = false;
            break;
        }
    }
    if (!status) {
        return false;
    } else {
        if (left.length == 0) {
            return Boolean(true * VerifySquenceOfBST(right));
        } else if (right.length == 0) {
            return Boolean(true * VerifySquenceOfBST(left));
        } else {
            return Boolean(VerifySquenceOfBST(left) * VerifySquenceOfBST(right));
        }
    }
}
module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};