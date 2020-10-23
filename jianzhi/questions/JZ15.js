//输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // 借助栈的方法
    // let stack = [];
    // while (pHead != null) {
    //     stack.unshift(pHead.val);
    //     pHead = pHead.next;
    // }
    // let reverseHead = new ListNode();
    // let p = reverseHead;
    // stack.forEach(item => {
    //     p.value = item;
    //     let temp = new ListNode();
    //     p.next = temp;
    //     p = temp;
    // });
    // return reverseHead;

    //使用头插法
    let p = new ListNode();
    while (pHead != null) {
        p.val = pHead.val;
        let temp = new ListNode();
        temp.next = p;
        p = temp;
        pHead = pHead.next;
    }
    return p.next;
}
module.exports = {
    ReverseList: ReverseList
};