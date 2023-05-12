// stack =====>> [][][][][][] all elements in sequece horizontally or vertically
// linear eg -> queue , array, stack
// non linear eg -> tree, graph

// stack data structure ------>>

// It is lenear data structure means operation done with one end
// FILO  ==> FIRST IN LAST OUT
// LIF0 => LASST IN FIRST OUT

// OPERATIONS ------->>
// 1. Push  ==> ADD NEW ELEMENT
// 2. Pop  ==> DELETE ELEMENT
// 3. IsEmpty

let data = [];
let currentSize = data.length; // array zize or counter
let maxLength = 5;

// adding new element ------->>
function push(newVal) {
  if (currentSize >= maxLength) {
    alert("stack is full " + newVal);
  } else {
    data[currentSize] = newVal;
    currentSize++;
  }
}

// deleting element --------->>

function pop() {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  } else {
    alert("Stack is empty");
  }
}

push(20);
push(0);
push(2);
push(11);
// push(56);
// push(87);
// push(31);

pop();

console.log(data); // 20 added in data array
