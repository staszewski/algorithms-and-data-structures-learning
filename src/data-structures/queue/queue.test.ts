import Queue from "./queue";

test('correctly enqueues objects', () => {
    const queue = new Queue()
    queue.enqueue({"value": 1})
    queue.enqueue({"value": 2})
    const output = queue.queue
    expect(output[0].value).toEqual(1)
    expect(output[1].value).toEqual(2)
});

test('enqueues correctly objects', () => {
    const queue = new Queue()
    queue.enqueue({"value": 1})
    queue.enqueue({"value": 2})
    queue.dequeue()
    expect(queue.queue[0]).toBeUndefined()
    expect(queue.queue[1].value).toEqual(2)
    queue.enqueue({"value": 3})
    expect(queue.queue[2].value).toEqual(3)
});


test('return false when there is no items to dequeue', () => {
    const queue = new Queue()
    expect(queue.dequeue()).toBeFalsy()
});
