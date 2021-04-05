import LinkedList from '../src/data-structures/linked-list/linked-list';

test('defaults head and tail to null', () => {
  const linkedList = new LinkedList();
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});

test('when there is one node appended both head and tail are the same node', () => {
  const linkedList = new LinkedList();
  linkedList.append(1);
  expect(linkedList.head?.value).toEqual(1);
  expect(linkedList.tail?.value).toEqual(1);
  expect(linkedList.tail?.next).toBeNull();
});

test('prepends value at the head of the linked list', () => {
  const linkedList = new LinkedList();
  linkedList.prepend(1);
  expect(linkedList.head?.value).toEqual(1);
  expect(linkedList.tail?.value).toEqual(1);
  linkedList.append(2);
  expect(linkedList.head?.value).toEqual(1);
  expect(linkedList.tail?.value).toEqual(2);
  linkedList.prepend(3);
  expect(linkedList.tail?.value).toEqual(2);
  expect(linkedList.head?.value).toEqual(3);
});

test('removes node correctly', () => {
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.remove(1);
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});

test('removes node correctly', () => {
  const linkedList = new LinkedList();
  expect(linkedList.remove(5)).toBeNull();

  linkedList.append(1);
  linkedList.append(2);

  expect(linkedList.head?.value).toBe(1);
  expect(linkedList.tail?.value).toBe(2);
  expect(linkedList.toArray()).toEqual([1, 2]);

  const deletedNode = linkedList.remove(1);
  expect(deletedNode?.value).toBe(1);
  expect(linkedList.toArray()).toEqual([2]);

  linkedList.append(5);
  linkedList.append(5);
  linkedList.append(5);
  linkedList.append(6);

  linkedList.remove(5);

  expect(linkedList.toArray()).toEqual([2, 6]);
});

test('returns false when value is not found in linked list', () => {
  const linkedList = new LinkedList();
  expect(linkedList.contains(5)).toBeFalsy();
});

test('returns true when value is found', () => {
  const linkedList = new LinkedList();
  linkedList.append(5);
  expect(linkedList.contains(5)).toBeTruthy();
});
