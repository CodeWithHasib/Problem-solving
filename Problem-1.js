/* 
Problem: Write a function that takes an array of numbers as input and returns the sum of all the positive numbers in the array.

Requirements:

The function should take an array of numbers as a parameter.
It should return the sum of all the positive numbers in the array.
If the array is empty or contains no positive numbers, the function should return 0.
Example:

Input: [2, -4, 6, -1, 3, -9, 0, 7]
Output: 18 (2 + 6 + 3 + 7 = 18)

Your task is to write the JavaScript function that solves this problem. You can use any approach or programming technique you prefer. Once you've written the function, test it with different inputs to ensure it works correctly.

Take your time to analyze the problem, break it down into smaller steps, and implement a solution. Remember to consider edge cases and handle them appropriately. Good luck!
*/


const numArrToSum = (arr = []) => {
    const goodNum = arr.filter(item => item > 0);
    const sum = goodNum.reduce((current , acc)=> acc + current  , 0)
    return sum;
}

const theArr = [12 , -23 , 43 , -45, 54]; 
console.log(numArrToSum(theArr))