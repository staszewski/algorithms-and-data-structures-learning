import HashTable from './hash-table';

test('hashes string to char code sum', () => {
  const hashTable = new HashTable();
  expect(hashTable.hash('adsjk')).toEqual(350);
});

test('inserts item into table / get returns same item', () => {
  const hashTable = new HashTable();
  hashTable.insertItem('key', 'value');
  expect(hashTable.getItem('key')).toEqual('value');
});

test('inserting / getting also works on non primitive values', () => {
  const hashTable = new HashTable();
  hashTable.insertItem({ x: 10 * 2 }, 1);
  expect(hashTable.getItem({ x: 10 * 2 })).toEqual(1);
  hashTable.insertItem([1, 2, 'a'], 1);
  expect(hashTable.getItem([1, 2, 'a'])).toEqual(1);
});

test('returns false when there is no item to update', () => {
  const hashTable = new HashTable();
  expect(hashTable.updateItem('12344', [1232131])).toBeFalsy();
});

test('updates (or actually inserts) item', () => {
  const hashTable = new HashTable();
  hashTable.insertItem({ x: '934asd' }, 1337);
  expect(hashTable.getItem({ x: '934asd' })).toEqual(1337);
});
