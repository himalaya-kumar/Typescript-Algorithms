export interface TreeNode { value: number; right: TreeNode; left: TreeNode; }

export class TreeNode implements TreeNode {
    constructor(value: number) {
        this.value = value;
        this.right = null as any;
        this.left = null as any;
    }
}

export interface BSTNum {
    root: TreeNode;
    insert(value: number): TreeNode;
    lookup(value: number): TreeNode;
    remove(value: number): Boolean;
}

const EMPTY_NODE = new TreeNode(0);

export class BSTNum implements BSTNum {

    public constructor() {
        this.root = EMPTY_NODE;
    }

    public insert(value: number): TreeNode {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //Insert values to left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return newNode;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Insert Values to Right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return newNode;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        return this.root;
    }

    public lookup(value: number): TreeNode {
        if (!this.root) {
            return EMPTY_NODE;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return EMPTY_NODE;
    }

    public remove(value: number): boolean {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode: TreeNode = EMPTY_NODE;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //Option 1:No Right Child
                if (currentNode.right === EMPTY_NODE) {
                    if (parentNode === EMPTY_NODE) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left === EMPTY_NODE) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                } else {
                    let leftMost : TreeNode = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    if(leftMost !== null){
                        while (leftMost.left !== null) {
                            leftMostParent = leftMost;
                            leftMost = leftMost.left;
                        }
                        
                        leftMostParent.left = leftMostParent.right;
                        leftMost.left = currentNode.left;
                        leftMost.right = currentNode.right;
                        if (parentNode === EMPTY_NODE) {
                            this.root = leftMost;
                        } else {
                            if (currentNode.value <parentNode.value) {
                                parentNode.left = leftMost;
                            } else if (currentNode.value > parentNode.value) {
                                parentNode.right = leftMost;
                            }
                        }
    
                    }
                }
                return true;
            }
        }
        return false;
    }
}