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
        const newNode = new TreeNode<T>(value);
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


    /**
     * Remove node from binary search tree
     * Condition when a node removed
     * - having zero child = set the node to be null
     * - having one child 
     *      -left or right gets attached to parent 
     * - having two child
     *      - either highest from left gets attached 
     *      - or lowest from rigth gets attached
     * @param value 
     * @returns Boolean
     */
    public remove(value: T): boolean {
        if(this.lookup(value) === null){
            return false;
        }
        const nodeToRemove = this.lookup(value);
        let currentNode = this.root;
        let parentNode = null as any;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //Zero child 
                if (nodeToRemove.left === null && nodeToRemove.right === null) {
                    if (parentNode.right.value === value) {
                        parentNode.right === null;
                    } else {
                        parentNode.left === null;
                    }
                    //One child left
                } else if (nodeToRemove.left && nodeToRemove.right === null) {
                    parentNode.left = nodeToRemove.left;
                } else if (nodeToRemove.right && nodeToRemove.left === null) {
                    parentNode.right = nodeToRemove.right;
                } else {
                    //both
                    //Picking most higher from left side
                    let mostHighestFromLeft:TreeNode<T> = new TreeNode();
                    if(nodeToRemove.left.right !== null){
                        mostHighestFromLeft.value = nodeToRemove.left.right.value;
                    }

                    while (mostHighestFromLeft) {
                        if (mostHighestFromLeft.right !== null) {
                            mostHighestFromLeft = mostHighestFromLeft.right;
                        } else {
                            break;
                        }
                    }

                    if (parentNode === null) {
                        //parentNode is null i.e. node is root
                        this.root.value = mostHighestFromLeft.value;
                    } else if(parentNode.right === nodeToRemove){
                        parentNode.right = mostHighestFromLeft;
                    } else {
                        parentNode.left = mostHighestFromLeft;
                    }
                      mostHighestFromLeft.right = nodeToRemove.right;
                      mostHighestFromLeft.left = nodeToRemove.left;

                      return true;
                }
            }

        }
        return false;
    }

}