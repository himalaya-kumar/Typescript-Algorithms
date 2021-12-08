import { StackNode } from '../StackNode';

describe('2. Stack Node Implementation', () => {
    /**
     * TEST_1
     */
    test('TEST_1:Init an Stack Node', () => {
        const node = new StackNode(null);
        expect(node.data).toBeNull();
        expect(node.next).toBeNull();
    });

    /**
     * TEST_2
     */
    test('TEST_2:Create stack node with value', () => {
        const node = new StackNode(10);
        expect(node.data).toBe(10);
        expect(node.next).toBeNull();
    });

    /**
     * TEST_3
     */
    test('TEST_3:Create stack node with object as a value', () => {
        const nodeValue = { key: 1, value: 'test' };
        const node = new StackNode(nodeValue);

        expect(node.data.key).toBe(1);
        expect(node.data.value).toBe('test');
        expect(node.next).toBeNull();
    });
});