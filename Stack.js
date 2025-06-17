class Stack {
    constructor() {
        this._top = -1;
        this._arr = [];
    }

    isEmpty() {
        return this._top === -1;
    }

    peek() {
        if (this._top === -1) return null;

        return this._arr[this._top];
    }

    push(elem) {
        this._top += 1;
        this._arr[this._top] = elem;
    }

    pop() {
        if (this._top === -1) return;

        const elem = this._arr[this._top];
        this._top -= 1;
        return elem;
    }

    clear() {
        while (!this.isEmpty()) {
            this.pop();
        }
    }
}

export { Stack };