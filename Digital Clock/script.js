function updateClock() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const greetingElement = document.getElementById("greeting");
  
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  
    // Animation effect on seconds update
    secondsElement.classList.remove("animate-bounce");
    void secondsElement.offsetWidth; // Trigger reflow to restart animation
    secondsElement.classList.add("animate-bounce");
  
    let greeting;
    if (hours < 12) {
      greeting = "Good Morning!";
    } else if (hours < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }
    greetingElement.textContent = greeting;
  
    updateBackground(hours);
  }
  
  function updateBackground(hours) {
    const body = document.body;
    if (hours < 6 || hours >= 18) {
      body.className =
        "flex items-center justify-center h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white";
    } else if (hours >= 6 && hours < 12) {
      body.className =
        "flex items-center justify-center h-screen bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 text-black";
    } else {
      body.className =
        "flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white";
    }
  }
  
  function showTimeFact() {
    const facts = [
      "Did you know? A day on Venus is longer than a year on Venus!",
      "The concept of a 'second' as a time unit was first used by ancient astronomers.",
      "In 1972, Coordinated Universal Time (UTC) was introduced.",
      "The smallest unit of time is called a Planck time.",
      "An atomic clock is accurate to within a second in 15 billion years.",
    ];
    const factElement = document.getElementById("fact");
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
  }
  
  document.getElementById("showFact").addEventListener("click", showTimeFact);
  
  setInterval(updateClock, 1000);
  
  updateClock();