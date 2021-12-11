export interface TreeNode<T> { value: T; right: TreeNode<T>; left: TreeNode<T>; }

export class TreeNode<T> implements TreeNode<T> {
    constructor(value:T = null as any){
        this.value = value;
        this.right = null as any;
        this.left = null as any;
    }
}