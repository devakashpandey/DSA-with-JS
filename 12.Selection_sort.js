//  selection sorting

// The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion
//  of the list and swaps it with the first element of the unsorted portion.

// sorting in assending order

let items = [20, 12, 53, 3];

function selectionSorting(data) {
  let minVal;
  for (let i = 0; i < data.length; i++) {
    minVal = i; // set the first value in a variable
    for (let j = i + 1; j < data.length; j++) {
      // 12    <      20
      if (data[j] < data[minVal]) {
        minVal = j;
      }
    }
    let temp = data[minVal];
    data[minVal] = data[i];
    data[i] = temp;
  }
}

selectionSorting(items);
console.log("ACCENDING = " + items); // sorted

// sorting in decending order

let items2 = [20, 3, 80, 16, 1, 13];

function decendingSorting(data) {
  for (let i = data.length - 1; i >= 0; i--) {
    minVal = i; // set the first value in a variable
    for (let j = i - 1; j >= 0; j--) {
      if (data[j] < data[minVal]) {
        minVal = j;
      }
    }
    let temp = data[minVal];
    data[minVal] = data[i];
    data[i] = temp;
  }
}

decendingSorting(items2);
console.log("DECENDING = " + items2);
