// Array Reversing

let data = [];
let currentSize = data.length;
let str = "Akash";

function push(newVal) {
  data[currentSize] = newVal;
  currentSize++;
}

function pop() {
  lastRemovedItem = data[currentSize - 1];
  currentSize--;
  data.length = currentSize;
  return lastRemovedItem;
}

function reverseString(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]); // pushing array in stack
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop(); // h s a k A
  }
}

str = str.split(""); // converting string into array (["A", "k","a","s","h"])
reverseString(str);

console.log(str); // ["h", "s", "a". "k", "A"]
