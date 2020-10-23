// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
    let array = [];
    while (head) {
        array.unshift(head.val);
        head = head.next;
    }
    return array;
}
module.exports = {
    printListFromTailToHead: printListFromTailToHead
};