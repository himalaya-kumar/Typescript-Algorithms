export interface QueueNode<T> {
    data: T;
    next: QueueNode<T>;
}

export class QueueNode<T> implements QueueNode<T> {
    constructor(data: T) {
        this.data = data;
        this.next = null as any;
    }
}