// SEARCHING IN ARRAY ----------->> (Liner Searching)

// search the item and give the index number of it

let data = [5, 7, 9, 10, 20, 1, 2];
let item = 10;
let index = undefined;

for (let i = 0; i < data.length; i++) {
  if (data[i] === item) {
    index = i;
    break;
  }
}

console.log(index);

let serchItem = () => {
  let data = [5, 7, 9, 10, 20, 1, 2];
  let item = document.getElementById("srchEle").value;
  let index = undefined;

  for (let i = 0; i < data.length; i++) {
    if (data[i] == item) {
      index = i;
      break;
    }
  }

  console.log(`index no of ${item} is ${index}`);
};

// DEFAULT FUNCTION OF SEARCHING GET INDEX NUMBER -------->>

console.log("default func on srch = " + data.indexOf(item));
