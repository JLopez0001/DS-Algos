/*

278. First Bad Version
You are a product manager and currently leading a team to develop a new product.
 Unfortunately, the latest version of your product fails the quality check. Since each 
 version is developed based on the previous version, all the versions after a bad version 
 are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. 
Implement a function to find the first bad version. You should minimize the number
 of calls to the API.

*/

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
      //we need the left to calvulate the better middle. To find the actual midpoint,
      //you must add this offset to left, hence let mid = left + Math.floor((right - left) / 2);
      // This places mid correctly between left and right.
      let mid = left + Math.floor((right - left) / 2);

      //This will mean that the mid is a bad version so anything forward is so we want to check the one before
      if (isBadVersion(mid)) {
        right = mid - 1; //let right be mid - 1 to check that half mid
      } else {
        left = mid + 1;
      }
    }
  };
};
