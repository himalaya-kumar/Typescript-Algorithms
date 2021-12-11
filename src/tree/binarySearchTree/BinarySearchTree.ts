import { TreeNode } from "../TreeNode";

export interface BinarySearchTree<T> {
    root: TreeNode<T>;
    insert(value: T): TreeNode<T>;
    lookup(value: T): TreeNode<T>;
    remove(value: T): Boolean;
}

export class BinarySearchTree<T> implements BinarySearchTree<T> {
    public constructor() {
        this.root = null as any;
    }

    public insert(value: T): TreeNode<T> {
        const newNode = new TreeNode<T>();
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return newNode;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return newNode;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        return this.root;
    }

    public lookup(value: T): TreeNode<T> {
        if (!this.root) {
            return null as any;
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
        return null as any;
    }


    public remove(value: T): Boolean {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        let parentNode = null as any;
        while (currentNode) {
            //Traversing through value
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {

                //when right node is null
                if (currentNode.right === null) {
                    this.rightNodeIsNull(parentNode, currentNode);
                } else if (currentNode.right.left === null) {
                    this.whenValueToLeftIsNull(currentNode, parentNode);
                } else {
                    this.otherwiseWhileRemoving(currentNode, parentNode);
                }
                return true;
            }
        }
        return false;
    }

    private otherwiseWhileRemoving(currentNode: TreeNode<T>, parentNode: any) {
        let leftmost = currentNode.right.left;
        let leftmostParent = currentNode.right;
        while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
        }

        // Parent's left subtree is now leftmost's right subtree
        leftmostParent.left = leftmost.right;
        leftmost.left = currentNode.left;
        leftmost.right = currentNode.right;

        if (parentNode === null) {
            this.root = leftmost;
        } else {
            if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
            }
        }
    }

    private whenValueToLeftIsNull(currentNode: TreeNode<T>, parentNode: any) {
        currentNode.right.left = currentNode.left;
        if (parentNode === null) {
            this.root = currentNode.right;
        } else {
            // if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;

                // if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
            }
        }
    }

    private rightNodeIsNull(parentNode: any, currentNode: TreeNode<T>) {
        if (parentNode === null) {
            this.root = currentNode.left;
        } else {
            //the node meant to be removed have a left value than attach the left value parent
            if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
            }
        }
    }
}