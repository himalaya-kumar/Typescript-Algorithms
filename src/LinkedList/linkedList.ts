/**
 * Linked List in
 */
export class LinkedList {
    private element: string;
    private next: LinkedList | null | undefined;
    private length = 0;
    private head: LinkedList | null | undefined = null;

    constructor(element: string) {
        this.element = element;
        this.next = null;
    }

    size = () => this.length;

    getHead = () => this.head;

    add = (element: string) => {
        var node = new LinkedList(element);
        if (this.head == null) this.head = node;
        else {
            let currentNode:LinkedList | null | undefined = this.head;
            while (currentNode?.next) {
                currentNode = currentNode.next;
            }
            if(currentNode != null){
                currentNode.next = node;
            }
        }
        this.length++;
    }

    remove = (element:string) => {
        let currentNode = this.head;
        let previousNode;
        if(currentNode?.element === element) {
            this.head = currentNode?.next;
        } else {
            while(currentNode?.element !== element){
                previousNode = currentNode;
                if(currentNode !== undefined){
                currentNode = currentNode?.next;
                }
            }
            if(previousNode != null) {
                previousNode.next = currentNode?.next;
            }
        }

        this.length --;
    }

    isEmpty = () => this.length === 0;

    indexOf = (element:string)  => {
        let currentNode = this.head;
        let index = -1;

        while(currentNode) {
            index++;
            if(currentNode.element === element) {return index;}
            currentNode = currentNode.next;
        }
        return -1;
    }

    elementAt = (index:number)=>{
        let currentNode = this.head;
        let count = 0;
        while(count < index){
            count++;
            currentNode = currentNode?.next;
        }
        return currentNode?.element;
    }

    addAt = (index : number,element:string) => {
        let node = new LinkedList(element);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if (index > this.length) return false;
        if(index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while(currentIndex < index) {
                currentIndex ++;
                previousNode = currentNode;
                if(currentNode != null)
                    currentNode = currentNode.next;
                
            }
        }
    }

}