//从上往下打印出二叉树的每个节点，同层节点从左至右打印。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    let arr1 = [],
        arr2 = [],
        arrAll = [];
    arr1.push(root);
    if (root == null || root.val == undefined) {
        return [];
    }
    while (arr1.length != 0 || arr2.length != 0) {
        while (arr1.length != 0) {
            let temp = arr1.shift();
            arrAll.push(temp.val);
            temp.left != null ? arr2.push(temp.left) : null;
            temp.right != null ? arr2.push(temp.right) : null;
        }
        while (arr2.length != 0) {
            let temp = arr2.shift();
            arrAll.push(temp.val);
            temp.left != null ? arr1.push(temp.left) : null;
            temp.right != null ? arr1.push(temp.right) : null;
        }
    }
    return arrAll;
}
module.exports = {
    PrintFromTopToBottom: PrintFromTopToBottom
};