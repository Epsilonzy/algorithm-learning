// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

function push(node) {
    // write code here
    if (this.stack) {
        let queue = []
        while (this.stack.length != 0) {
            if (node > top()) {
                queue.push(pop());
            } else {
                break;
            }
        }
        this.stack.push(node);
        while (queue.length != 0) {
            this.stack.push(queue.shift());
        }
    } else {
        this.stack = [];
        this.stack.push(node);
    }
}

function pop() {
    // write code here
    return this.stack.pop();
}

function top() {
    let length = this.stack.length;
    return this.stack[length - 1];
}

function min() {
    // write code here
    return this.stack[this.stack.length - 1];
}
module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};