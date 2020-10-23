// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function preOrder(node, obj) {
    if (node == null) {
        return;
    } else {
        obj.str += node.val;
        preOrder(node.left, obj);
        preOrder(node.right, obj);
    }
}

function HasSubtree(pRoot1, pRoot2) {
    let p1 = {
            str: ''
        },
        p2 = {
            str: ''
        }
    preOrder(pRoot1, p1);
    preOrder(pRoot2, p2);
    if (p1.str.search(p2.str) == -1 || p2.str == "") {
        return false;
    } else {
        return true;
    }
}

module.exports = {
    HasSubtree: HasSubtree
};