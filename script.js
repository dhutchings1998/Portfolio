var i = 0;
var txt = "[1] print(skills) *'Python'*'R'*'SQL'*'JavaScript'*'C++'*'Java'"; /* The text */
var speed = 85; /* The speed/duration of the effect in milliseconds */
const blue_idx = [4, 5, 6, 7, 8]
const grey_idx = [0, 1, 2, 9, 16]

function typeWriter() {
  if (i < txt.length) {
    if (txt.charAt(i) == "*") {
      document.getElementById("skills").innerHTML += '<br></br>';
      i++
    }
    else if (blue_idx.includes(i)) {
      document.getElementById("skills").innerHTML += `<span style="color:#4BBAF8">${txt.charAt(i)}</span>`;
      i++
    }
    else if (grey_idx.includes(i)) {
      document.getElementById("skills").innerHTML += `<span style="color:#D9DBDB">${txt.charAt(i)}</span>`;
      i++
    }
    else {
      document.getElementById("skills").innerHTML += txt.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  }
}
typeWriter()