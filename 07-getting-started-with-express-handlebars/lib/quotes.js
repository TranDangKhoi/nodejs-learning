const quotes = [
  "Study now or you will regret later.",
  "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
  "It’s hard enough to find an error in your code when you’re looking for it; it’s even harder when you’ve assumed your code is error-free.",
  "Good code is its own best documentation. As you’re about to add a comment, ask yourself, “How can I improve the code so that this comment isn’t needed?” Improve the code and then document it to make it even clearer.",
  "One of my most productive days was throwing away 1000 lines of code.",
];

exports.getQuotes = () => {
  const idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
};
