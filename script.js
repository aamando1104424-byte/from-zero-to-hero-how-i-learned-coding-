console.log("=== DAY 1 DEBUG MODE ===");

for (let i = 0; i < 5; i++) {
  console.log("Hello Odin!");
}

function inspire() {
  const quotes = [
    "Day 1 or One Day — you decide.",
    "Every expert was once a beginner.",
    "Code is poetry. Write yours.",
    "17 weeks. 4 hours. No excuses.",
    "The best time to plant a tree was 10 years ago. The second best is now."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("motivation").textContent = randomQuote;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("h1").style.color = "#f1c40f";
  inspire();
});