
/**
 * Althogh [] is already an array but this is class for tweaking.
 */
export class Array<T> {
    private length: number;
    private data: T[];

    constructor(...args: T[]) {
        this.length = args.length;
        this.data = [];
        for (const key in args) {
            this.data[key] = args[key];
        }
    }

    /**
     * Size for array
     */
    public size = () => this.length;
    /**
     * check if array is empty
     */
    public isEmpty = () => this.length === 0;
    /**
     * Get Value
     * @param index 
     */
    public get = (index: number) => this.data[index];
    /**
     * Push Element in Array
     * @param item 
     */
    public push(item: T): number {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    /**
     * pop this last item
     */
    public pop(): T {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    /**
     * Insert item in array
     * @param index 
     * @param item 
     */
    public insert(index: number, item: T): object {
        for (let i = this.length; i >= index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
        this.length++;
        return this.data;
    }

    /**
     * Add item before an array
     * @param item 
     */
    public prepend = (item:T) => this.insert(0,item);

    /**
     * Delete an array
     * @param index 
     */
    public delete(index:number) {
        const item = this.data[index];
        this.shiftItem(index);
        return item;
    }

    /**
     * This Shift item one up
     * @param index 
     */
    private shiftItem(index:number) {
        for (let i = index; i < this.length - 1; i--) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}