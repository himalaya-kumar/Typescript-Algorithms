export default class StringSet {

    private collection: string[];

    constructor() {
        this.collection = [];
    }

    has = (value: string): boolean => 
    (this.collection.indexOf(value) !== -1);

    values = (): string[] => this.collection;

    add = (value: string): boolean => {
        if (!this.has(value)) {
            this.collection.push(value);
            return true;
        }
        return false;
    }

    remove = (value: string): boolean => {
        if (this.has(value)) {
            let index = this.collection.indexOf(value);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    size = (): number => this.collection.length;

    union = (otherSet: StringSet): StringSet => {
        let unionSet = new StringSet();
        let firstSet = this.values();

        let secondSet = otherSet;

        firstSet.forEach(element => {
            unionSet.add(element);
        });

        secondSet.collection.forEach(element => {
            unionSet.add(element);
        });

        return unionSet;
    }

    intersection = (otherSet: StringSet): StringSet => {
        let intersectionSet = new StringSet();
        let firstSet = this.values();
        firstSet.forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }

    difference = (otherSet: StringSet): StringSet => {
        let differenceSet = new StringSet();
        let firstSet = this.values();
        firstSet.forEach(element => {
            if (!otherSet.has(element)) differenceSet.add(element);
        });
        return differenceSet;
    }

    subSet = (otherSet: StringSet): boolean => 
    this.values().every(e => otherSet.has(e));

}