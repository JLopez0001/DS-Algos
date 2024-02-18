function gradingStudents(int) {
  let answer = [];
  for (const num of int) {
    let rounded = Math.ceil(num / 5) * 5;
    let difference = rounded - num;

    if (difference < 3 && rounded >= 40) {
      answer.push(rounded);
    } else if (num < 38) {
      answer.push(num);
    } else {
      answer.push(num);
    }
  }
  return answer;
}

console.log(gradingStudents([73, 67, 38, 33]));
