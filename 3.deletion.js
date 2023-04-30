// DELETE ANY ELEMENT OF ARRAY ----------->>> (MANUALLY)

let data = [2, 45, 21, 34, 8, 9]; // delete 34
let position = 3;

for (let i = position; i < data.length - 1; i++) {
  data[i] = data[i + 1]; // putting next value in i
}
data.length = data.length - 1;

console.log(data); // [2, 45, 21, 8, 9];

// QUESTION ---------->

let deleteNum = () => {
  let data = [2, 45, 21, 34, 8, 9];
  let position = document.getElementById("indexPosi").value;
  position = parseInt(position);

  for (let i = position; i < data.length; i++) {
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  console.log(data);
};

// DEFAULT FUNCTION OF DELETING ------------>>>

let data2 = [2, 5, 7, 8, 0, 1];
data2.splice(2, 1); // 2 postion wale ko delete krna hai and , 1 hi element delete krna hai
console.log(data2);
