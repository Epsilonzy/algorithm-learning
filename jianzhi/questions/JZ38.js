//输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot) {
    //非递归解法 递归太简单了
    let q1 = [],
        q2 = [],
        height = 0;
    if (!pRoot) {
        return height;
    }
    q1.push(pRoot);
    while (!(q1.length == 0 && q2.length == 0)) {
        if (q1.length != 0) {
            while (q1.length != 0) {
                let c = q1.shift();
                if (c.left) {
                    q2.push(c.left);
                }
                if (c.right) {
                    q2.push(c.right);
                }
            }
            height += 1;
        } else {
            while (q2.length != 0) {
                let c = q2.shift();
                if (c.left) {
                    q1.push(c.left);
                }
                if (c.right) {
                    q1.push(c.right);
                }
            }
            height += 1;
        }
    }
    return height;
}
module.exports = {
    TreeDepth: TreeDepth
};