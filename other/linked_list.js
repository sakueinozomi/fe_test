class Stack{
    constructor() {
        this.data_length = 0;
        this.lastNode = null;
    }
    _createNode(val) {
        const node = {
            val,
            nextNode: null,
            preNode: null
        }
        return node;
    }
    push(data){
        const node = this._createNode(data);
        if (this.lastNode) {
            node.preNode = this.lastNode;
            this.lastNode.nextNode = node;
        }
        this.data_length++;
        this.lastNode = node;
    }
    pop(){
        if ( this.data_length === 0 ){
            return null;
        }
        const node = this.lastNode;
        const last = node.preNode;
        if (last) {
            last.next = null;
        }
        this.lastNode = last;
        node.preNode = null; //disconect this poped object's binding.
        this.data_length--;
        return node.val;
    }
    size(){
        return this.data_length;
    }
}