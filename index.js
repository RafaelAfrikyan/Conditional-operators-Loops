'use strict';

//1. for vs for-in

// 1. Given a number. Print “odd” if the number is odd and “even” if itʼs even.
let numbers = [125, 35, 20];
let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    console.log('even')
  } else {
    console.log('odd')
 }
  i++;
}