export default class NumberSet {

    private collection : number[];

    constructor() {
        this.collection = [];
    }

    has = (value :number): boolean => (this.collection.indexOf(value) !== -1);

    values = ():number[] => this.collection;

    add = (value :number) : boolean => {
        if(!this.has(value)) {
            this.collection.push(value);
            return true;
        }
        return false;
    }

    remove = (value : number) : boolean => {
        if(this.has(value)) {
            let index = this.collection.indexOf(value);
            this.collection.splice(index,1);
        }
        return false;
    }

    size = () : number => this.collection.length;

	/**
	 * Modifier : public 
	 * return type : StringSet
	 * Name : union
	 * Method Parameter : otherSet
	 * Algorithm : 
     * Union is set of collection it even have duplicates
     * 
	 */
    union = (otherSet:NumberSet) : NumberSet => {
        let firstSet = this.values();
        let unionSet = new NumberSet();

        firstSet.forEach(element => {
            unionSet.add(element);
        });

        otherSet.values().forEach(element => {
            unionSet.add(element);
        });
        return unionSet;
    }

    /**
     * Modifiers : public 
     * return Type : NumberSet 
     * Name : intersaction 
     * Method Parameter : otherSet : NumberSet 
     *
     * Algorithms :
     * Intesection has all the element of set one and set two and 
     * it does not have any same element 
     *  
     */
    intersection = (otherSet:NumberSet) :NumberSet => {

        let intersectionSet = new NumberSet();
        let firstSet = this.values();

        firstSet.forEach(element => {
            if(otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }

    /**
     * Modifiers : public 
     * return Type : NumberSet 
     * Name : intersaction 
     * Method Parameter : otherSet : NumberSet 
     *
     * Algorithms :
     * Intesection has all the element of set one and set two and 
     * it does not have any same element 
     *  
     */

     difference = (otherSet : NumberSet) : NumberSet => {

        let differenceSet = new NumberSet();
        let firstSet = this.values();

        firstSet.forEach(element => {
            if(!otherSet.has(element)) differenceSet.add(element);
        });
        return differenceSet;
    }
    
    subset = (otherSet : NumberSet ):boolean => this.values().every(e => otherSet.has(e));
}