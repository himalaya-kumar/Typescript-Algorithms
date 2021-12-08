import { Array } from '../ArrayClass';

describe('1. Array Class Implementation', () => {
   /**
    * TEST_1
    */
   test('TEST_1:Create an empty array', () => {
      const array = new Array();
      expect(array.isEmpty()).toBe(true);
   });

   /**
    * TEST_2
    */
   test('TEST_2:Create a new Array with 5 elements', () => {
      const array = new Array(1, 2, 3, 4, 5);
      expect(array.size()).toEqual(5);
   });

   /**
    * TEST_3
    */
   test('TEST_3:Get value from a given index in array', () => {
      const array = new Array(
         { id: 1, name: 'firstName' },
         { id: 2, name: 'secondName' });
      expect(array.get(1)).toEqual({ id: 2, name: 'secondName' });
   });

   test('TEST_4:Push Value to the end of array', () => {
      const array = new Array();

      expect(array.push('Hello')).toBe(1);
      expect(array.push('there')).toBe(2);
   });

   test('TEST_5:Remove last item in array', () => {
      const array = new Array(
         ['name', 'Gogi'],
         ['name', 'JD'],
         ['name', 'Bear'],
      );
      expect(array.pop()).toEqual(['name', 'Bear']);
   });

   test('TEST_6:delete item at a given index', () => {
      const array = new Array(
         { id: 1, name: 'Francis' },
         { id: 2, name: 'Carole' },
         { id: 3, name: 'Peter' },
         { id: 4, name: 'Erika' }
      );
      expect(array.delete(2)).toEqual({ id: 3, name: 'Peter' });
   });
   
});