const jianzhi = require('./jianzhi/entry');
const encode = require('bytenode');
const JavaScriptObfuscator = require('javascript-obfuscator');
const test = require('./test/test');
//创建二叉树
// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }
// let head1 = new TreeNode(1);
// let p = head1;
// p.left = new TreeNode(2);
// p.right = new TreeNode(3);
// p = p.left;
// p.left = new TreeNode(1);
// p.right = new TreeNode(5);
// console.log(head1);
// console.log(jianzhi.JZ21.IsPopOrder([1], [1]));
// let head2 = new TreeNode(2);
// let p2 = head2;
// p2.left = new TreeNode(4);
// p2.right = new TreeNode(5);
// console.log(jianzhi.JZ17.HasSubtree(head1, head2));

// let arr = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5]
// ]

// res = jianzhi.JZ19.printMatrix(arr);
// console.log(res);
// var obfuscationResult = JavaScriptObfuscator.obfuscate(
//     test.toString(), {
//         compact: false,
//         controlFlowFlattening: true,
//         numbersToExpressions: true,
//         simplify: true,
//         shuffleStringArray: true,
//         splitStrings: true
//     }
// );