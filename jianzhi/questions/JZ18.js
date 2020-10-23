//操作给定的二叉树，将其变换为源二叉树的镜像。
// 二叉树的镜像定义：源二叉树 
//     	    8
//     	   /  \
//     	  6   10
//     	 / \  / \
//     	5  7 9 11
//     	镜像二叉树
//     	    8
//     	   /  \
//     	  10   6
//     	 / \  / \
//     	11 9 7  5

function Mirror(root) {
    // write code here
    if (root == null) {
        return;
    } else {
        root.left = [root.right, root.right = root.left][0];
        Mirror(root.left);
        Mirror(root.right);
    }
}
module.exports = {
    Mirror: Mirror
};