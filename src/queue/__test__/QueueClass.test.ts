import { Queue } from "../QueueClass";

describe('6. Queue Class Implementation Testing', () => {
    test('TEST_1:Create an null values Queue', () => {
        const queue = new Queue();
        expect(queue).toBeInstanceOf(Queue);
        expect(queue).not.toBeNull();
        expect(queue.isEmpty()).toBeTruthy();
    });

    test('TEST_2:Enqueue data from queue', () => {
        const queue = new Queue<string>();
        queue.enqueue('Joy');
        queue.enqueue('Matt');
        queue.enqueue('Pavel');
        queue.enqueue('Samir');

        expect(queue.size).toBe(4);
        expect(queue.isEmpty()).toBeFalsy();
    });

    test('TEST_3:Enqueue data from queue', () => {
        const queue = new Queue<string>();
        queue.enqueue('Joy');
        queue.enqueue('Matt');
        queue.enqueue('Pavel');
        queue.enqueue('Samir');

        expect(queue.size).toBe(4);
        expect(queue.isEmpty()).toBeFalsy();
    });

    test('TEST_4:Dequeue data from queue', () => {
        const queue = new Queue<string>();
        queue.enqueue('Joy');
        queue.enqueue('Matt');
        queue.enqueue('Pavel');
        queue.enqueue('Samir');

        expect(queue.size).toBe(4);
        expect(queue.isEmpty()).toBeFalsy();

        expect(queue.dequeue().data).toBe('Joy');
        expect(queue.dequeue().data).toBe('Matt');

        expect(queue.size).toBe(2);
        expect(queue.isEmpty()).toBeFalsy();
    });

    test('TEST_5:Peek node from queue', () => {
        const queue = new Queue<number>();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.peek().data).toBe(1);
    });

    test('TEST_6:Peek throws error if queue is empty', () => {
        try {
            const queue = new Queue();
            expect(queue.peek()).toThrowError();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Queue is empty');
        }
    });
});