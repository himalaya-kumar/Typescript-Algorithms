import { QueueNode } from "../QueueNode";

describe('5.Queue Node Implementation',() => {
    test('TEST_1:Queue node with null',() => {
        const node = new QueueNode(null as any);
        expect(node.data).toBeNull();
        expect(node.next).toBeNull();
    });

    test('TEST_2:Queue node with value',() => {
        const node = new QueueNode(10);
        expect(node.data).toBe(10);
        expect(node.next).toBeNull();
    });

    test('TEST_2:Queue node with value',() => {
        const node = new QueueNode({key:1,value:'test'});
        expect(node.data.key).toBe(1);
        expect(node.data.value).toBe('test');
        expect(node.next).toBeNull();
    });
});