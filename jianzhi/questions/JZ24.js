// 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function dfs(root, path, ret, sum) {
    path.push(root.val);
    if (sum == root.val && !root.left && !root.right) {
        ret.push([...path]);
        //如果直接传入path，则存入的是该数组的引用
    }
    root.left ? dfs(root.left, path, ret, sum - root.val) : null;
    root.right ? dfs(root.right, path, ret, sum - root.val) : null;
    path.pop();
}

function FindPath(root, expectNumber) {
    // write code here
    let path = [],
        ret = [];
    if (!root) {
        return [];
    }
    dfs(root, path, ret, expectNumber);
    return ret;
}
module.exports = {
    FindPath: FindPath
};