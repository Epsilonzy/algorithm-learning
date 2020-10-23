//输入一个链表，输出该链表中倒数第k个结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    // write code here
    let stack = [];
    while (head != null) {
        stack.unshift(head);
        head = head.next;
    }
    return stack[k - 1];
}
module.exports = {
    FindKthToTail: FindKthToTail
};