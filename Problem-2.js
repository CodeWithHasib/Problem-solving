/* 
Problem: Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.

Requirements:

The function should take a string as a parameter.
It should return the count of vowels in the string.
The count should be case-insensitive, meaning both uppercase and lowercase vowels should be counted.
If the string doesn't contain any vowels, the function should return 0.
Example:

Input: "Hello, World!"
Output: 3 (e, o, o)

Your task is to write the JavaScript function that solves this problem. You can use any approach or programming technique you prefer. Remember to handle both uppercase and lowercase vowels and consider edge cases. Once you've written the function, test it with different inputs to ensure it works correctly.

Take your time to analyze the problem, break it down into smaller steps, and implement a solution. Good luck!
*/


const vowelCounter = (string = '') => {
    const text = string.toLowerCase()

    const vowel = ['a', 'e', 'i', 'o', 'u'];

    let totalVowel = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowel.includes(text[i])) {
            totalVowel++
        }
    }
    return totalVowel;

}

console.log(vowelCounter('the nmp i'))