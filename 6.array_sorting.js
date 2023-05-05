// ARRAY SORTING ------------>>> (bubble sorting)

// we need a nested loop

// sorting in acending order
let data = [12, 10, 25, 5, 27];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    //   12 = 0 bada hai 10 = 1 se to swap kar do
    if (data[j] > data[j + 1]) {
      // swapping
      let temp = data[j]; // temp = 12
      data[j] = data[j + 1]; // 12 = 10
      data[j + 1] = temp; // 10 = 12
    }
  }
}

console.log(data);
