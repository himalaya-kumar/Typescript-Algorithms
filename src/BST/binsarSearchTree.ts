// As the BST based on Data type number
class NODE_BST {

    value : number;
    left : NODE_BST;
    right :NODE_BST;

    constructor(value:number,left:NODE_BST|any,right:NODE_BST|any){
        this.value = value;
        this.left = left;
        this.right = right;
    }

    search = (val:number) :any => {
        //Booleans
        let valueIsVal = this.value === val;
        let valIsLessThanValueAndLeftIsNotNull = val < this.value && this.left != null;
        let valIsgreaterThanValueAndrighttIsNotNull = val > this.value && this.right != null;

        if(valueIsVal) return this;
        else if(valIsLessThanValueAndLeftIsNotNull) return this.left.search(val);
        else if(valIsgreaterThanValueAndrighttIsNotNull) return this.right.search(val);

        return null;
    }

    visit = () => {
        //Booleans
        let leftIsNotNull = this.left != null;
        let rightIsNotNull = this.right != null;

        if(leftIsNotNull) {this.left.visit();}
        if(rightIsNotNull) { this.right.visit();}
        console.log(this.value);
    }

    addNode = (node:NODE_BST) => {
        if(node.value < this.value){
            if(this.left == null){
                this.left = node;
            } else {
                this.left.addNode(node);
            }
        } else if(node.value > this.value) {
            if(this.right == null){
                this.right = node;
            } else {
                this.right.addNode(node);
            }
        }
    }
}

export class Tree {

    root: NODE_BST|any;
    constructor(){
        this.root = null;
    }

    //
    traverse = () => {
        this.root.visit();
    }

    search = (val:number) : boolean => {
        let found = this.root.search(val);
        return found;
    }

    addValue = (val:number) => {
        let n = new NODE_BST(val,null,null);
        if(this.root == null) {
            this.root = n;
        } else {
            this.root.addNode(n);
        }
    }

}