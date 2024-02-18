function timeConverstion(str) {
  let answer = "";
  let endTime = str.length - 1 - 1;
  let hourString = str[0] + str[1];
  let restOfTime = str.slice(2, 8);
  let hourInt = parseInt(hourString);

  if (str[endTime] === "A" && hourString === "12") {
    return (answer += "00" + restOfTime);
  } else if (str[endTime] === "P" && hourString === "12") {
    return (answer += hourString + restOfTime);
  } else if (str[endTime] === "P") {
    hourInt += 12;
    return (answer += hourInt + restOfTime);
  } else {
    return (answer += hourString + restOfTime);
  }
}

console.log(timeConverstion("12:40:22PM"));
