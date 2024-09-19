let s = prompt("Enter a string of numbers:");

let new_s = [s[0]];

for (let i = 1; i < s.length; i++) {
  if (+s[i] % 2 == 0 && +s[i - 1] % 2 == 0) {
    new_s.push("-", s[i]);
  } else {
    new_s.push(s[i]);
  }
}

document.write(new_s.join(""));
