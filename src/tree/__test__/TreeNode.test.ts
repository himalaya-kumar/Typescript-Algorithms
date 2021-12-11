import { TreeNode } from "../TreeNode";

describe('9. Tree Node Implementation', () => {

    test('TEST_1:Create an null or empty tree', () => {
        const node = new TreeNode<unknown>();
        expect(node).toBeDefined();
        expect(node.value).toBeNull();
        expect(node.left).toBeNull();
        expect(node.right).toBeNull();
    });

    test('TEST_2:Create a valued tree', () => {
        const node = new TreeNode<number>(5);
        expect(node.value).toBe(5);
    });
});