/* --- Part 2: JavaScript Functions --- */

// Example 1: Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Example 2: Demonstrating scope
let globalMessage = "I am global!";

function showScope() {
  let localMessage = "I am local!";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Accessible only here
}
showScope();

// Example 3: Reusable function to add/remove classes
function toggleAnimation(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.toggle(className);
}

// --- Part 3: Combining CSS + JS ---
const animateBtn = document.getElementById("animateBtn");
animateBtn.addEventListener("click", function() {
  toggleAnimation("box", "animate");
  console.log("Box area:", calculateArea(100, 100)); // Example of return value in use
});
