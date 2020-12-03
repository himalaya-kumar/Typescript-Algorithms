/**
 * Node Class will have value contain the Binary Search tree nodes values
 * i.e. node value itself and its left and right
 *  
 */
class Node {
    public data: number;
    public left: Node | null;
    public right: Node | null;
    constructor(data: number = 0, left: Node | null = null, right: Node | null = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/**
 * data Type for this BST is Number.
 */
export class BinarySearchTree {

    /**Root can assume as a start of BST*/
    private root: Node;

    constructor() {
        this.root = new Node();
    }

    /**
     * This will add value to the BST after cheking the position where it be placed in.
     *  
     * @param data 
     */
    add = (data: number): void => {

        const rootElement = this.root;
        
        if (rootElement === null) {
            this.root = new Node(data);
            return;
        } else {
            this.searchTree(rootElement, data);
        }
    }

    /**
     * minimum value on BST
     */
    findMin = () => {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * Finding max value
     */
    findMax = () => {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.right;
    }

    /**
     * Finding the given data
     * @param data 
     */
    find = (data: number) => {
        let current: Node | null = this.root;
        while (current!.data != data) {
            if (current != null && data < current.data) {
                current = current.left;
            } else {
                current = current!.right;
            }
        }
    }

    /**
     * To check if the data is present
     * @param data 
     */
    isPresent = (data: number) => {
        let current: Node | null = this.root;
        while (current) {
            if (data == current.data) return true;
            if (current !== null) {
                if (data < current.data) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }
        return false;
    }

    /**
     * To remove the data from BST
     * @param data 
     */
    remove = (data:number) => {
        const removeNode = function(node:any,data:any) {
            if(node == null) {
                return null;
            }
            if(data == node.data) {
                if(node.left == null && node.right == null) return null;
                if(node.left == null) return node.right;
                if(node.right == null) return node.left;
                var tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.left;
                node.right = removeNode(node.right,tempNode.data);
                return node;
            } else if(data < node.data) {
                node.left = removeNode(node.left,data);
                return node;
            } else {
                node.right = removeNode(node.right,data);
                return node;
            }
        }
        this.root = removeNode(this.root,data);
    }

    /**
     * In BST Balanced is property where we check the balanced height.
     */
    isBalanced = () : boolean => this.findMinHeight() >= this.findMaxHeight() -1;

    findMinHeight = (node:Node | null = this.root):number => {
        if(node == null) return -1;
        let left = this.findMinHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if(left < right) return left +1;
        else return right + 1;
    }

    /**
     * find the Max Height
     * @param node 
     */
    findMaxHeight = (node :Node | null = this.root):number => {
        if(node == null) return -1;
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if(left > right) return left +1;
        else return right +1;
    }

    /**
     * In order is way of BST
     */
    inOrder = ():Array<Node> | null => {
        if(this.root == null) return null;
        else return this.traverseInOrder(this.root);
    }

    /**
     * traverse order of BST
     * @param node 
     */
    traverseInOrder = (node:Node): Array<Node>  => {
        let result = new Array();
        node.left && this.traverseInOrder(node.left);
        result.push(node.data);
        node.right && this.traverseInOrder(node.right);
        return result;
    }

    /**
     * Preorder
     */
    preOrder = ():Array<Node>| null  => {
        if(this.root == null) return null;
        else return this.traversePreOrder(this.root);
    }

    /**
     * Traverse pre order
     * @param node 
     */
    traversePreOrder = (node:Node) :Array<Node> => {
        let result = new Array();
        result.push(node.data);
        node.left && this.traversePreOrder(node.left);
        node.right && this.traversePreOrder(node.right);
        return result;
    }

    /**
     * Post Preoder
     */
    postOrder = ():Array<Node>| null => {
        if(this.root == null) return null;
        else return this.traversePostOrder(this.root);
    }

    /**
     * traverse post order
     * @param node 
     */
    traversePostOrder = (node:Node):Array<Node> => {
        var result = new Array();
        node.left && this.traversePostOrder(node.left);
        node.right && this.traversePostOrder(node.right);
        result.push(node.data);
        return result;
    }

    /**
     * Level order the value
     */
    levelOrder = ()=>{
        let result = [];
        let Q = [];
        if(this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node:any  = Q.shift();
                result.push(node);
                if(node.left != null) Q.push(node.left);
                if(node.right != null) Q.push(node.right);
            }
            return result;
        } else return null;
    }

    /**
     * Common recursion method
     * @param rootElement 
     * @param data 
     */
    private searchTree = (rootElement: Node, data?: number): any => {
        if (rootElement.data !== null && data !== undefined) {
            if (data < rootElement.data) {
                if (rootElement.left === null) {
                    rootElement.left = new Node(data);
                    return;
                } else if (rootElement.left !== null) {
                    return this.searchTree(rootElement.left);
                }
            } else if (data > rootElement.data) {
                if (rootElement.right === null) {
                    rootElement.right = new Node(data);
                    return;
                } else if (rootElement.right !== null) {
                    return this.searchTree(rootElement.right);
                }
            } else {
                return null;
            }
        }
        return this.searchTree(rootElement);
    }
}