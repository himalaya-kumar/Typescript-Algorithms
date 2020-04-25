import { HashTable,hash} from './hash/hashTable';

const value : string = "Hello World";

function ok(value : string ):void{
    console.log(value);
}

ok(value);

console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();

