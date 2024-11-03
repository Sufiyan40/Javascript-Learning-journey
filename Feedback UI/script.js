const feedbackOptions = document.querySelectorAll(".feedback-option");
let selectedFeedback = "";

feedbackOptions.forEach((option) => {
  option.addEventListener("click", () => {
    feedbackOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
    selectedFeedback = option.id.charAt(0).toUpperCase() + option.id.slice(1);
  });
});

document.getElementById("sendReview").addEventListener("click", () => {
  if (selectedFeedback) {
    document.getElementById("feedbackContainer").classList.add("hidden");
    document.getElementById("feedbackResult").classList.remove("hidden");
    document.getElementById("selectedFeedback").textContent = selectedFeedback;
  } else {
    alert("Please select a feedback option before submitting.");
  }
});