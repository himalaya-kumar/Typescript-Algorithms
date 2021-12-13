import {HashTable} from '../HashTable';

describe('12. HashTable Implementation', () => {

    test('1. Create a hash table of a given size', () => {
        const hashTable = new HashTable(10);
        expect(hashTable.size).toBe(10);
    });

    test('2. Create new empty hash table',() => {
        const hashTable = new HashTable(1);

        expect(hashTable.size).toBe(1);
    });

    test('3. Set data to Hash Table',() => {
        const hashTable = new HashTable(5);
        hashTable.set('Users',150);
        expect(hashTable.get('Users')).toBe(150);
    });
});