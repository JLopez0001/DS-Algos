/*
Your company built an in-house calendar tool called HiCal. You want to add a
 feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal,
 a meeting is stored as objects ↴ with integer properties startTime and endTime. 
 These integers represent the number of 30-minute blocks past 9:00am.

For example:

  { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

JavaScript
Write a function mergeRanges() that takes an array of multiple meeting time 
ranges and returns an array of condensed ranges.

For example, given:

  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

JavaScript
your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

*/

function meetingTime(arr) {
  let sorted = arr.sort((a, b) => a.startTime - b.startTime);
  console.log(sorted);

  let merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    let currentTime = sorted[i];
    let previousTime = merged[merged.length - 1];
    if (previousTime.endTime > currentTime.startTime) {
      previousTime.endTime = Math.max(
        previousTime.endTime,
        currentTime.endTime
      );
    } else {
      merged.push(currentTime);
    }
  }
  return merged;
}

console.log(
  meetingTime([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ])
);
