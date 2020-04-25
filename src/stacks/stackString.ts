export default class StackString {
    private count: number;
    private storage: string[];
    constructor() {
        this.count = 0;
        this.storage = [];
    }

    push = (value: string) => {
        this.storage[this.count] = value;
        this.count++;
    }

    pop = (): string | undefined => {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size = (): number => this.count;
    peek = (): string => this.storage[this.count - 1];

}