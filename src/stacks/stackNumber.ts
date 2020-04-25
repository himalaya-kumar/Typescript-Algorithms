export default class StackNumber {

    private count : number;
    private storage : number[];

    constructor() {
        this.count = 0;
        this.storage = [];
    }

    push = (value :number):void => {
        this.storage[this.count] = value;
        this.count++;
    }

    pop = () : number | undefined => {
        if(this.count === 0) {
            return undefined;
        }
        this.count --;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size = () : number => this.count;
    peek = () : number => this.storage[this.count - 1];
}