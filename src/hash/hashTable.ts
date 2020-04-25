/**Hash Table  */
/**
 * A Simple Hash Function
 * [string,string][index]
 */

export const hash = (str:string,max:number):number => {
    let hash = 0;
    for(let i =0;i<str.length;i++){
        hash += str.charCodeAt(i);
    }
    return hash % max;
}

export class HashTable {
    // Type Would be [number ,[string,string]]
    // Array<Array<number>>
    private storage:Array<Array<Array<string>>>;

    private storageLimit:number;

    constructor(){
        this.storage =[];
        this.storageLimit =14;
    }

    print = () => console.log(this.storage);

    add = (key:string,value:string) =>{
        let index = hash(key,this.storageLimit);
        if(this.storage[index] === undefined){
            this.storage[index] = [[key,value]];
        } else {
            let inserted = false;
            for(let i = 0;i < this.storage[index].length;i++){
                if(this.storage[index][i][0] === key){
                    this.storage[index][i][1] = value;
                    inserted =true;
                }
            }
            if(inserted === false){
                this.storage[index].push([key,value]);
            }
        }
    }

    remove = (key:string)  => {
        var index = hash(key,this.storageLimit);
        if(this.storage[index].length === 1 && this.storage[index][0][0]=== key){
            delete this.storage[index];
        } else {
            for(let i = 0; i < this.storage[index].length;i++){
                if(this.storage[index][i][0] === key){
                    delete this.storage[index][i];
                }
            }
        }
    }

    lookup = (key:string) => {
        var index = hash(key,this.storageLimit);
        if(this.storage[index] === undefined){
            return undefined;
        } else {
            for(let i = 0;i<this.storage[index].length;i++){
                if(this.storage[index][i][0] === key){
                    return this.storage[index][i][1];
                }
            }
        }
    }
}