// ARRAY TRAVERSING (ITRATE) ------------>>> (CHECKING ALL THE ELEMENT)

let roll = [2, 6, 24, 1, 0, 5, 3, 45, 37];

for (i = 0; i <= roll.length - 1; i++) {
  console.log("Roll num is " + roll[i]);
}

console.log(roll[3]); // ACCESING THE 3RD INDEX NUMBER (1)

// function for button work

let getEle = () => {
  let el = document.getElementById("ele").value;

  if (el < roll.length) {
    alert(`Value is = ${roll[el]}`); // THE NUM WE PUT IN INPUT IT GIVES THE VALUE OF THE roll (A/Q INDEX NUMBER)
  } else {
    alert("Index Not Found!!");
  }
};
