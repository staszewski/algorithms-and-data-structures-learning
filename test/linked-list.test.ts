import LinkedList from '../src/data-structures/linked-list/linked-list';
import LinkedListNode from '../src/data-structures/linked-list/linked-list-node';

test('when there is one node appended both head and tail are the same node', () => {
  const linkedList = new LinkedList();
  const node = new LinkedListNode(1);
  linkedList.append(node);
  expect(linkedList.head?.value).toEqual(1);
  expect(linkedList.tail?.value).toEqual(1);
  expect(linkedList.tail?.next).toBeNull();
});

test('prepends value at the head of the linked list', () => {
  const linkedList = new LinkedList();
  const node = new LinkedListNode(1);
  const nodeToAppend = new LinkedListNode(2)
  linkedList.prepend(node)
  expect(linkedList.head?.value).toEqual(1)
  expect(linkedList.tail?.value).toEqual(1)
  linkedList.append(nodeToAppend)
  expect(linkedList.head?.value).toEqual(1)
  expect(linkedList.tail?.value).toEqual(2)
  const nodeToPrepend = new LinkedListNode(3)
  linkedList.prepend(nodeToPrepend)
  expect(linkedList.tail?.value).toEqual(2)
  expect(linkedList.head?.value).toEqual(3)
});
