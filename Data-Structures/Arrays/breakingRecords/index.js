/*
Maria plays college basketball and wants to go pro.
Each season she maintains a record of her play. 
She tabulates the number of times she breaks her 
season record for most points and least points in a
game. Points scored in the first game establish her 
record for the season, and she begins counting from 
there.

Given the scores for a season, determine the 
number of times Maria breaks her records for most
 and least points scored during the season.

Function Description:
Complete the breakingRecords function in the editor
below. breakingRecords has the following 
parameter(s):
int scores[n]: points scored per game
Returns
int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.
*/

function breakingRecords(scores) {
  // Write your code here
  let minCount = 0;
  let maxCount = 0;

  let min = scores[0];
  let max = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      maxCount++;
      max = scores[i];
    } else if (scores[i] < min) {
      minCount++;
      min = scores[i];
    }
  }
  return [maxCount, minCount];
}
console.log(breakingRecords([12, 24, 10, 24]));
