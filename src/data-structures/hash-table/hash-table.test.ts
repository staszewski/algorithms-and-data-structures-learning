import HashTable from './hash-table';

test('hashes string to char code sum', () => {
  const hashTable = new HashTable();
  expect(hashTable.hash('adsjk')).toEqual(350);
});

test('inserts item into table / get returns same item', () => {
  const hashTable = new HashTable();
  hashTable.insertItem('key', 'value');
  expect(hashTable.getItem('key')).toBeDefined();
  expect(hashTable.getItem('key')).toEqual('value');
});
