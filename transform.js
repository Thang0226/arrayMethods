function isLower(char) {
  return char === char.toLowerCase();
}

let s = prompt("Enter a string:");
let new_s = [];

for (let i = 0; i < s.length; i++) {
  if (isLower(s[i])) {
    new_s.push(s[i].toUpperCase());
  } else {
    new_s.push(s[i].toLowerCase());
  }
}

document.write("The string after transformation: <br>" + new_s.join(""));
