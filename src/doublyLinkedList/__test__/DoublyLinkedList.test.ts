import { DoublyLinkedList } from "../DoublyLinkedList";

describe('8. DoublyLinkedList Implementation', () => {
    test('TEST_1:An Empty Linked List', () => {
        const doublyLinkedList = new DoublyLinkedList<string>('');

        expect(doublyLinkedList.head).toEqual({
            data: '',
            next: null,
            prev: null,
        });
    });

    test('TEST_2:Append node to linked list', () => {
        const doublyLinkedList = new DoublyLinkedList<number>(5);
        doublyLinkedList.prepend(10);
        expect(doublyLinkedList.head.data).toBe(10);
        expect(doublyLinkedList.tail.prev.data).toBe(10);

    });

    test('TEST_3:Insert node list in a given index', () => {
        const nodeValue1 = { value: 1, key: 'key1' };
        const nodeValue2 = { value: 2, key: 'key2' };
        const nodeValue3 = { value: 3, key: 'key3' };

        const doublyLinkedList = new DoublyLinkedList<Object>(nodeValue1);
        doublyLinkedList
            .append(nodeValue3)
            .prepend(nodeValue1)
            .insert(1, nodeValue2);

        expect(doublyLinkedList.head.data).toEqual({ value: 1, key: 'key1' });
        expect(doublyLinkedList.head.next.data).toEqual({ value: 2, key: 'key2' });
        expect(doublyLinkedList.tail.data).toEqual({ value: 3, key: 'key3' });

    });

    test('TEST_4:Print list in array format', () => {
        const doublyLinkedList = new DoublyLinkedList<number>(10);

        doublyLinkedList.append(15);
        doublyLinkedList.append(20);
        doublyLinkedList.append(25);

        expect(doublyLinkedList.printList()).toEqual([10, 15, 20, 25]);
    });
});