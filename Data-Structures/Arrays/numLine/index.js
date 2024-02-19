/*
You are choreographing a circus show with various 
animals. For one act, you are given two kangaroos on 
a number line ready to jump in the positive direction
(i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves 
at a v1 rate of  meters per jump.
The second kangaroo starts at location x2 and moves 
at v2 a rate of  meters per jump. You have to figure 
out a way to get both kangaroos at the same location
at the same time as part of the show. If it is 
possible, return YES, otherwise return NO.
*/

function numLine(x1, v1, x2, v2) {
  if ((x1 <= x2 && v1 < v2) || (x2 <= x1 && v2 < v1)) {
    return "No";
  }

  if ((x2 - x1) % (v2 - v1) === 0) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(numLine(0, 3, 4, 2));
