// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
let p = document.getElementById("text")

function cool(){
document.addEventListener("DOMContentLoaded", function() {
p.innerHTML = "This is really cool!";
});
}
cool()