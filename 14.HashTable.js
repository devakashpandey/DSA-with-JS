// Object (HASH TABLE)

//A Hash table is defined as a data structure used to insert, look up, and remove
// key-value pairs quickly.

let data = {
  name: "akash",
  age: 24,
  mail: "akky@gmail.com",
};

for (detail in data) {
  //   console.log(detail); // name, age, mail (keys) in string
  console.log(data[detail]); // akash ,24 , mail (values)
}

console.log(Object.keys(data)); // keys in array
console.log(Object.values(data)); // values in array
