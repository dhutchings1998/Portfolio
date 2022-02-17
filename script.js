var i = 0;
var txt = "[1] print(skillset) * 'Python'*'R'*'SQL'*'JavaScript'*'C++'*'Java'"; /* The text */
var speed = 85; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    if (txt.charAt(i) == "*") {
      document.getElementById("skills").innerHTML += '<br></br>';
      i++
    } else {
      document.getElementById("skills").innerHTML += txt.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  }
}
typeWriter()