import { DoublyNodeList } from "../DoublyNodeList";

describe('7. DoublyNodeList Implementation',() => {
    test('TEST_1:Create an null node List',() => {
        const node = new DoublyNodeList<null>(null);
        expect(node.data).toBeNull();
        expect(node.next).toBeNull();
        expect(node.next).toBeNull();
    });

    test('TEST_2:Create list node with object as a value', () => {
        const nodeValue = { key: 'test', value: 1 };
        const node = new DoublyNodeList(nodeValue);
    
        expect(node.data.key).toBe('test');
        expect(node.data.value).toBe(1);
        expect(node.next).toBeNull();
        expect(node.prev).toBeNull();
      });
});