console.log("JS file loaded");

const p = document.getElementById("message");

if (p) {
  p.textContent = "JS loaded and DOM accessed successfully.";
} else {
  console.log("❌ Failed to access DOM element (message)");
}