// Queue  -->>
// The queue is a linear data structure used to represent a linear list.
// It allows insertion of an element to be done at one end and deletion of
// an element to be performed at the other end.

// Queues are FIFO (first in, first out) data structures.

// insertion from start (front) [][][][][][] deletation from end (rear)

let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    alert("Queue is fulll");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1]; // 13 , 14 , 22, undefined
    }
    currentSize--;
    queue.length = currentSize; // 13,14,22
  } else {
    alert("Queue is empty");
  }
}

function display() {
  console.log(queue);
}

enqueue(10);
enqueue(13);
enqueue(14);
enqueue(22);

// // enqueue(10);
// // enqueue(10);
dequeue();
display();
