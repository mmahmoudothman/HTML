//  first question
// function sum(arr) {
//     return arr.reduce((accumulator, currentValue) => {
//       if (currentValue > 20) {
//         return accumulator + currentValue;
//       }
//       return accumulator;
//     }, 0);
//   }
  
//   // Example usage:
//   const myArray = [10, 25, 5, 30, 15];
//   const sumOfElementsGreaterThan20 = sum(myArray);
//   console.log(sumOfElementsGreaterThan20); // Output: 55 (25 + 30)
  
// ************************************************************************************************************


// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const bbb = a.filter(function (s) {
//     return (s.charAt(0) == 'a' && s.length > 4)
// });

// console.log(bbb)
// ************************************************************************************************************



// const concat = (...args) => {
//     return args.reduce((result, arg) => {
//       if (typeof arg === 'string') {
//         // If the argument is a string, split it into individual characters and add them to the result
//         return result.concat(arg.split(''));
//       } else if (Array.isArray(arg)) {
//         // If the argument is an array, add its elements to the result
//         return result.concat(arg);
//       }
//       return result;
//     }, []);
//   };

// alert("Hello world");

// let numArr = [];
// for (let i = 0; i <= 3; i++) {
//     numArr[i] = i * 2;
// }
// console.log(numArr[0]);
// console.log(numArr[1]);
// console.log(numArr[2]);


// let enrollment = 99;
// let medianGrade = 2.8;
// let credits = 5 + 4 + (2 * 3);

// console.log(enrollment, medianGrade, credits)

// const x = {
//     'a': 97,
//     'b': 98,
//     'c': 99,
//     'd': 199,
//     'mult': function (a, b) {
//         return a * b;
//     }
// };


// console.log(x)

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// const res = multiply(1, 2)
// console.log(res)



// const multiply2 = (num1, num2) => num1 * num2;
// var res2 = multiply2(2, 2)
// console.log(res2)


// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const bbb = a.filter(function (s) {
//     return (s.charAt(0) == 'a' && s.length > 4)
// });

// console.log(bbb)

// const a2 = a.filter(function (s) {
//     return s.length > 7
// });
// const a3 = a.filter(s => s.length > 7);
// const a4 = a.find(s => s.length > 7);
// const a5 = a.findIndex(s => s.length > 7);

// console.log(a)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)



concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

// console.log("*************************")
// var b1 = a.map(function (s) {
//     return s.length
// });
// console.log("b1: " + b1);

// var b3 = a.map(s => s.length);
// console.log("a3: " + b3);




function calc(multiplier, base, ...numbers) {
    var temp = numbers.reduce(
        (accum, num) => accum + num, base);
    return multiplier * temp;
}
// var total = calc(2, 6, 10, 9, 8);
// console.log("total: " + total);


// 1.Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.
const arr = [10, 15, 20, 30, 50]
// const value = arr.filter(function (s) {
    // return s > 20
// })


// function sum2(member) {
//     member.reduce(
//         (accum, num) => accum + num,
//         0,
//     )
// }
// const res3 = sum2(arr)
// console.log(res3)


// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => {
//         if (currentValue > 20)
//             return accumulator + currentValue
//         else
//             return accumulator
//     }
//     ,
//     0,
// );


// console.log(sumWithInitial);
// Expected output: 10


// const value2 = arr.filter(s => s > 20)

// console.log("arr", arr)
// console.log("value", value)
// console.log("value2", value2)


