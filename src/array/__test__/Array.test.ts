import { Array } from '../ArrayClass';

describe('1. Array Class Implementation', () => { 
    /**
     * TEST_1
     */
    test('TEST_1:Create an empty array', () => {
        const array = new Array();
        expect(array.isEmpty()).toBe(true);
     });

     test('TEST_2:Create a new Array with 5 elements',() => {
        const array = new Array(1,2,3,4,5);
        expect(array.size()).toEqual(5);
     });

     
});