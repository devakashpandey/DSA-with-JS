// INSERTING A NEW ELEMENT IN ARRAY

let data = [30, 50, 3, 12, 34];
let newData = 70;
let position = 2;

console.log("before = " + data);

for (let i = data.length - 1; i >= 0; i--) {
  if (i >= position) {
    // index agr position jitna hai ya use bada hai to value ko aage badhate raho
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = newData; // agr index and given position match hua to us index pe given num do add kr dega
    }
  }
}

console.log("after = " + data);

// EXAMPLE ----------->>>

let insert = () => {
  let value = [2, 4, 5, 8, 6, 1, 0];
  let newEle = document.getElementById("newEle").value;
  newEle = parseInt(newEle);
  let position = document.getElementById("posi").value;

  for (let i = value.length - 1; i >= 0; i--) {
    if (i >= position) {
      value[i + 1] = value[i];

      if (i == position) {
        value[i] = newEle;
      }
    }
  }

  console.log(value);
};

// SPLICE METHOD ------------>>> TO INSERT ELEMENT ANY WHERE IN ARRAY

let elements = [2, 3, 6, 8, 9, 1, 0];

elements.splice(2, 0, 33); // 2ND INDEX PE , 0 ITEM DELETE , 33 DALNA HAI

console.log("splice = " + elements);
