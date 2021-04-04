import LinkedList from '../src/data-structures/linked-list/linked-list';
import LinkedListNode from '../src/data-structures/linked-list/linked-list-node';

test('when there is one node appended both head and tail are the same node', () => {
  const linkedList = new LinkedList();
  const node = new LinkedListNode(1);
  linkedList.insert(node);
  expect(linkedList.head?.value).toEqual(1);
  expect(linkedList.tail?.value).toEqual(1);
  expect(linkedList.tail?.next).toBeNull();
});
