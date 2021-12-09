import { LinkedList, Node } from "../LinkedList";

describe('4. Linkedlist Implementation', () => {
    test('TEST_1:Create an null node', () => {
        const node = new Node<null>(null);
        expect(node.data).toBeNull();
        expect(node.next).toBeNull();
    });

    test('TEST_2:Create an value node', () => {
        const node = new Node<number>(10);
        expect(node.data).toBe(10);
        expect(node.next).toBeNull();
    });

    test('TEST_3:Create an object node', () => {
        const nodeValue = { key: 1, value: 'test' };
        const node = new Node(nodeValue);
        expect(node.data.key).toBe(1);
        expect(node.data.value).toBe('test');
        expect(node.next).toBeNull();
    });

    test('TEST_4:Append node to linked list', () => {

        const linkedList = new LinkedList(5);
        linkedList.append(10);

        expect(linkedList.head.data).toBe(5);
        expect(linkedList.head.next.data).toBe(10);
        expect(linkedList.head.next.next).toBeNull();
    });

    test('TEST_5:Prepend node to linked list', () => {

        const linkedList = new LinkedList(5);
        linkedList.prepend(10);

        expect(linkedList.tail.data).toBe(5);
        expect(linkedList.head.data).toBe(10);
    });

    test('insert node list in a given index', () => {
        const nodeValue1 = { value: 1, key: 'key1' };
        const linkedList = new LinkedList(nodeValue1);
    
        const nodeValue2 = { value: 2, key: 'key2' };
        const nodeValue3 = { value: 3, key: 'key3' };
    
        linkedList.append(nodeValue1).prepend(nodeValue3).insert(1, nodeValue2);
    
        expect(linkedList.head.next.data).toEqual({ value: 2, key: 'key2' });
      });
});