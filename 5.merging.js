// MERGING TWO ARRAYS MANUALLY ---------------->>>

let data = [3, 4, 5, 6, 7, 8];
let data2 = [9, 10, 11, 12];
let data3 = [];

for (let i = 0; i < data.length; i++) {
  data3[i] = data[i]; // 1st copy data into data3
}
for (let i = 0; i < data2.length; i++) {
  data3[data.length + i] = data2[i]; // then copy data and data2 in data3
}

console.log(data3);
