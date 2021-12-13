import { TreeNode } from '../../TreeNode';
import { BSTNum } from '../BSTNum';

describe('13.Number Binary Search Tree', () => {
  test('TEST_1:Create binary search tree', () => {
    const bst = new BSTNum();

    expect(bst).toBeDefined();
    expect(bst.root).toEqual(new TreeNode(0));
  });

  test('TEST_2:Insert values in tree', () => {
    const bst = new BSTNum();

    const node1 = bst.insert(9);
    const node2 = bst.insert(4);
    const node3 = bst.insert(6);
    const node4 = bst.insert(20);
    const node5 = bst.insert(170);
    const node6 = bst.insert(15);
    const node7 = bst.insert(1);

    expect(node1.value).toBe(9);
    expect(node2.value).toBe(4);
    expect(node3.value).toBe(6);
    expect(node4.value).toBe(20);
    expect(node5.value).toBe(170);
    expect(node6.value).toBe(15);
    expect(node7.value).toBe(1);
  });

  test('TEST_3:look for a node in tree', () => {
    const bst = new BSTNum();

    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);

    expect(bst.lookup(6).value).toBe(6);
    expect(bst.lookup(45).value).toBe(0);
  });

  test('TEST_4:remove nodes from tree', () => {
    const bst = new BSTNum();

    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);
    /**
     *   9
     * 4     20
     *1  6  15    170
     *
     */
    expect(bst.remove(9)).toBeTruthy();
    expect(bst.remove(4)).toBeTruthy();
    expect(bst.remove(170)).toBeTruthy();
    expect(bst.remove(53)).toBeFalsy();
    expect(bst.remove(678)).toBeFalsy();
    expect(bst.remove(138)).toBeFalsy();
  });
});