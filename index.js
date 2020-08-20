// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  document.addEventListener("DOMContentLoaded", function() {
    let str = document.getElementById("text");
    str.textContent = "This is really cool!";
}) 

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );