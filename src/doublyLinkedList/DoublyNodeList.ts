export interface INode<T> { data: T; next: INode<T>; prev: INode<T>; }

export class DoublyNodeList<T> implements INode<T> {
    data: T;
    next: INode<T>;
    prev: INode<T>;
    constructor(data: T) {
        this.data = data;
        this.next = null as any;
        this.prev = null as any;
    }
}