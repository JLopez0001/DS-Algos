/*
A teacher asks the class to open their books to a page number. 
A student can either start turning pages from the front of the book 
or from the back of the book. They always turn pages one at a time. 
When they open the book, page 1 is always on the right side:

Given n and p, find and print the minimum number of pages that must be 
turned in order to arrive at page .
*/
function pageCount(n, p) {
  let start = Math.floor(p / 2);
  let back;

  if (n % 2 === 0) {
    back = Math.ceil((n - p) / 2);
  } else {
    back = Math.floor((n - p) / 2);
  }
  console.log(start, back);
  return Math.min(start, back);
}
console.log(pageCount(5, 4));
