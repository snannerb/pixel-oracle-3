// Define responses for each category
const responses = {
  life: [
    "Life is a journey, not a destination.",
    "The purpose of life is to find your purpose.",
    "Stay curious and keep exploring.",
    "Every day is a new opportunity.",
    "Life is what happens when you're busy making other plans."
  ],
  love: [
    "Love is the only force capable of transforming an enemy into a friend.",
    "To love and be loved is to feel the sun from both sides.",
    "Love is composed of a single soul inhabiting two bodies.",
    "The best thing to hold onto in life is each other.",
    "Love is the flower; you’ve got to let it grow."
  ],
  tech: [
    "The future belongs to those who believe in the beauty of their dreams.",
    "Technology is best when it brings people together.",
    "Innovation distinguishes between a leader and a follower.",
    "The only way to do great work is to love what you do.",
    "First, solve the problem. Then, write the code."
  ],
  fun: [
    "Never underestimate the power of a good laugh.",
    "Fun is just another word for learning.",
    "Play is the highest form of research.",
    "Life is more fun when you play the fool.",
    "The most wasted of all days is one without laughter."
  ]
};

// Add event listener to the form
document.getElementById("oracle-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get user input
  const question = document.getElementById("question").value.trim();
  const category = document.getElementById("category").value;

  // Validate inputs
  if (!question || !category) {
    alert("Please fill out all fields.");
    return;
  }

  // Select a random response from the chosen category
  const categoryResponses = responses[category];
  const randomResponse = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];

  // Display the response
  const responseBox = document.getElementById("response");
  responseBox.textContent = randomResponse;
});