class MinStack {
    private stack:number[]
    private minStack:number[]
    private size: number
    constructor() {
        this.stack = new Array<number>()
        this.minStack = new Array<number>()
        this.size = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(this.size === 0){
            this.minStack.push(val)
        } else {
            this.minStack.push(this.minStack[this.size-1] < val ? this.minStack[this.size-1] : val)
        }
        this.stack.push(val)
        this.size++
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.size<=0) return;
        this.stack.pop()
        this.minStack.pop()
        this.size--
    }

    /**
     * @return {number}
     */
    top(): number {
        if(this.size<=0) return -1;
        return this.stack[this.size-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        if(this.size<=0) return -1;
        return this.minStack[this.size-1]
    }
}
