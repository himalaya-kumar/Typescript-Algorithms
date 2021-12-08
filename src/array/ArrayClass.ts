
export class Array<T> {
    private length:number;
    private data:T[];

    constructor(...args:T[]){
        this.length = args.length;
        this.data = [];
        for (const key in args) {
            this.data[key] = args[key];
        }
    }

    
}