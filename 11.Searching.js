// Searching  (Binary Searching) (Iterative Approch) // divide in 3 part and return the middle result

// f(n) => asking the complexity
// O(n) => how much complexity come from this

// with sorted array we use only binary search otherwise we use linear search
// If we use binary with unsorted array then we sort first then we use

// it take middle point and check if find value is bigger than mid point
// then is serch right side or array otherwise it search left side

let data = [5, 9, 19, 30]; // sorted array
let find = 19;
let start = 0;
let end = data.length - 1;
let position = undefined;

function recursiveBinary(data, start, end) {
  // finding the mid point
  mid = Math.floor((start + end) / 2); //  index 1 = 9 is mid

  if (data[mid] === find) {
    position = mid;
  } else if (data[mid] < find) {
    recursiveBinary(data, mid + 1, end); // find value "mid" se bada hai to aage ka srch kro
  } else {
    recursiveBinary(data, start, mid - 1); // find value "mid" se chota hai to pixe ka srch kro
  }
}

recursiveBinary(data, start, end);
console.log(position); // 2 index = 19
