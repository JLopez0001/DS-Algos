function stairCase(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let col = 0; col < n - i; col++) {
      str += "^";
    }

    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
stairCase(4);
