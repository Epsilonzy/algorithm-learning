//输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

// function ListNode(x) {
//     this.val = x;
//     this.next = null;
// }

function produce(body, hand) {
    let first = body;
    while (body != null || hand != null) {
        if (hand == null) {
            break;
        }
        if (body.next == null) {
            body.next = hand;
            break;
        }
        if (body.next.val >= hand.val && body.val <= hand.val) {
            let temp = hand;
            hand = hand.next;
            temp.next = body.next;
            body.next = temp;
        } else if (body.next.val < hand.val) {
            body = body.next;
        }
    }
    return first;
}

function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 == null) {
        return pHead2;
    } else if (pHead2 == null) {
        return pHead1;
    }
    if (pHead1.val < pHead2.val) {
        //以pHead1为主体
        pHead1 = produce(pHead1, pHead2);
        return pHead1;
    } else {
        //以pHead2为主体
        pHead2 = produce(pHead2, pHead1);
        return pHead2;
    }
}
module.exports = {
    Merge: Merge
};