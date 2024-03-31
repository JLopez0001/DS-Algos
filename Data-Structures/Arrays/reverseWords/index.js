/*
Your team is scrambling to decipher a recent message, worried it's a plot to break 
into a major European National Cake Vault. The message has been mostly deciphered,
 but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and 
reverses the order of the words in place. ↴

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're
 modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's
  immutable strings.

For example:

  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

*/

function reverseWords(messageArr) {
  let start = 0;
  let end = messageArr.length - 1;

  swap(start, end, messageArr);

  console.log(messageArr);

  let wordLetter = 0;
  for (let i = 0; i <= messageArr.length; i++) {
    if (messageArr[i] === " " || i === messageArr.length) {
      console.log(wordLetter);
      swap(wordLetter, i - 1, messageArr);
      wordLetter = i + 1;
    }
  }

  return messageArr.join("");
}

function swap(start, end, arr) {
  while (start < end) {
    let temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;

    start++;
    end--;
  }
}

// Test the function
const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
];

console.log(reverseWords(message));
