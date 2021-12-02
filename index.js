'use strict';

//1. for vs for-in

// 1. Given a number. Print “odd” if the number is odd and “even” if itʼs even.
// let numbers = [125, 35, 20];
// let i = 0;
// while (i < numbers.length) {
//   if (numbers[i] % 2 === 0) {
//     console.log('even')
//   } else {
//     console.log('odd')
//  }
//   i++;
// }

//2. . Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).

// let angels = [30, 30];
// let sumOfAngels = 0;
// let sum = 180;
// let i;
// let result;
// for (i = 0; i < angels.length; i++){
// sumOfAngels = sumOfAngels + angels[i]
// }
// result = sum - sumOfAngels;
// console.log(result)

//3. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.
let number = 7485;
let lastDigit = number % 10;
let newnumber = (number - lastDigit) / 10;
let result = 0;
if (lastDigit === 0) {
  console.log(number)
}
else 
result = lastDigit + newnumber.toString()
console.log(result)
