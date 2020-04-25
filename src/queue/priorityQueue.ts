interface QueueObject {
    value : string ,
    priority:number
}

export default class PriorityQueue {

    private collection :QueueObject[];

    constructor(){
        this.collection = [];
    }

	/**
	 * Modifier : public 
	 * return type : void
	 * Name : printCollection
	 * Method Parameter : no
	 * Algorithm : 
     * printCollection is printing the collection.
	 */
    printCollection = () :void => console.log(this.collection);

    /**
	 * Modifier : public 
	 * return type : void
	 * Name : enqueue
	 * Method Parameter : element : string
	 * Algorithm : 
     * enqueue is adding to the collection
	 */
    enqueue = (element:QueueObject) => {
        if(this.isEmpty()) this.collection.push(element);
        else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if(element.priority < this.collection[i].priority){
                    this.collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added) this.collection.push(element);
        }
    }

    dequeue = () : undefined|string => {
        let lastValue = this.collection.shift();
        return lastValue?.value;
    }

    front = () : string => this.collection[0].value;

    size = () : number => this.collection.length;

    isEmpty = ():boolean => (this.collection.length === 0);
}

