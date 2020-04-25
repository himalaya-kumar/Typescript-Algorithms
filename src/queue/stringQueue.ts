export default class StringQueue {

    private collection : string[];

    constructor() {
        this.collection = [];
    }

    print = ():void => console.log(this.collection);

	/**
	 * Modifier : public 
	 * return type : void
	 * Name : enqueue
	 * Method Parameter : no
	 * Algorithm : 
     * Enqueue is a way of adding value to the queue.
     * 
	 */
    enqueue = (value:string):number => this.collection.push(value);

    /**
	 * Modifier : public 
	 * return type : void
	 * Name : dequeue
	 * Method Parameter : no
	 * Algorithm : 
     * Dequeue is a way of removing value to the queue.
     * 
	 */
    dequeue = () : string|undefined => this.collection.shift();
  
	    /**
	 * Modifier : public 
	 * return type : void
	 * Name : front
	 * Method Parameter : no
	 * Algorithm : 
     * Dequeue is a way of removing value to the queue.
     * 
	 */
	front = () : string|undefined => this.collection[0];

	size = () : number => this.collection.length;

	isEmpty = () : boolean => (this.collection.length === 0);

	
}