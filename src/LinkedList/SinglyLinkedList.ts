
//Holds the values in the form of nodes

class NODE_SINGLINLIST {
    element:string;
    next:NODE_SINGLINLIST;
    constructor(element:string,next:NODE_SINGLINLIST|any) {
        this.element = element;
        this.next = next;
    }
}

export class SinglyLinkedList {

    length: number;
    head: NODE_SINGLINLIST|null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    size = () => this.length;
    getHead = () => this.head;

    add = (element:string) => {
        let node = new NODE_SINGLINLIST(element,null);

        if(this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;

            //loop is there if no node present in the list
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            // Adding node to the end of the list
            currentNode.next = node;
        }
        // Increment the length
        this.length++;
    } 

    remove = (element:string) => {
        let currentNode = this.head;
        let previousNode;
        if(currentNode?.element === element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        } else {
            // Check which node is to remove
            while (currentNode?.element !== element) {
                    previousNode = currentNode;
                if (currentNode != undefined) {
                    currentNode = currentNode?.next;    
                }
            }

            //Removing the currentNode
            if(previousNode != null)
            {previousNode.next = currentNode.next;}
        }

        //Decrementing the length
        this.length --;
    }

    isEmpty = () => this.length == 0;

    indexOf = (element :String) => {
        let currentNode = this.head;
        let index = -1;
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index + 1;
            }
        }
        if (currentNode != null) {          
            //TODO : remove the  !
            currentNode = currentNode!.next;
        }
    }

    elementAt = () => {
        
    }
    
}