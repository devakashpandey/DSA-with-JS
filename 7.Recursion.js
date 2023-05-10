// RECURSION ===> RE CALLING ==> KHUD KO BAAR BAAR CALL KRNA
// Recursion involves calling the same function within itself, which leads to a call stack.
//  to solve a problem by breaking it down into smaller sub-problems

let data = 0;

function apple(x) {
  console.log(x);
  if (x < 10) {
    apple(x + 1);
  }
}

apple(data);

// QUESTION -------->> FACTORIAL WITH RECURSION

let numb = 5;

function fact(num) {
  // we have to give a if statement of resolve the maximum call stack size error
  if (num == 0) {
    return 1;
  }
  return num * fact(num - 1); // call fact again (recursion)
}

console.log(`fatorial of ${numb}  = ` + fact(5));

// INDIRECT RECURSION  ===>
// it occurs when a function calls another function that eventually calls the original function and it forms a cycle.
// ek function ke andr kisi dusre function ko call krna

// function apple() {
//   banana();
// }
// apple();

// function banana() {
//   apple();
// }
// banana();

let money = 100;
let totalApple = 0;

function buyApple(a) {
  if (a > 0) {
    console.log("I have", a, "RS", totalApple);
    buyMore(a);
  } else {
    console.log("No more money..TOTAL APPLlE = " + totalApple);
  }
}

function buyMore(a) {
  totalApple++;
  buyApple(a - 10);
  //   console.log("Buy more", a);
}

buyApple("money = " + money);

// QUESTION --------------->> REVERSING A ARRAY WITH RECURSION

let givenArr = [6, 9, 2, 45, 0, 65];
let temp;

function reversing(givenArr, start, end) {
  // kab rukna hai
  if (start <= end) {
    temp = givenArr[start];
    givenArr[start] = givenArr[end];
    givenArr[end] = temp;

    reversing(givenArr, start + 1, end - 1); // ek aage wala aur piche se ek kam wala har baap swap kro
    console.log(givenArr);
  }
}

reversing(givenArr, 0, givenArr.length - 1);

// REVERSING INBUILT FUUNCTION ===========>>

let numbers = [3, 6, 9, 1, 2, 6, 7];
let result = numbers.reverse();
console.log(result);
