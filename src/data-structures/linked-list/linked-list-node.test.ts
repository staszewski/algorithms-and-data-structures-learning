import LinkedListNode from './linked-list-node';

test('creates node with correct value and initial next of null', () => {
  const node = new LinkedListNode(1);
  expect(node.value).toEqual(1);
  expect(node.next).toBeNull();
});

test('creates node with objects as a value', () => {
  const value = { value: 1, key: 'lala' };
  const node = new LinkedListNode(value);
  expect(node.value.value).toEqual(value.value);
  expect(node.value.key).toEqual(value.key);
  expect(node.next).toBeNull();
});

test('links two nodes together correctly', () => {
  const node2 = new LinkedListNode(2);
  const node1 = new LinkedListNode(1, node2);

  expect(node1.next).toBeDefined();
  expect(node2.next).toBeNull();
  expect(node1.value).toBe(1);
  expect(node1.next.value).toBe(2);
});
