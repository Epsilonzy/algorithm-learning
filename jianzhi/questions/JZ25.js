// 输入一个复杂链表
// （每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点）
// ，请对此链表进行深拷贝，并返回拷贝后的头结点。
// （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）



function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead) {
    //使用map
    let map = new Map(),
        first = pHead;
    while (pHead) {
        map.set(pHead, new RandomListNode(pHead.label));
        pHead = pHead.next;
    }

    map.forEach((item, index) => {
        if (map.has(index.next)) {
            item.next = map.get(index.next);
        }
        item.random = map.get(index.random);
    })
    return map.get(first);
}
module.exports = {
    Clone: Clone
};