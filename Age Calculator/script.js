
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const dobInput = document.getElementById("dob");
    const resultOutput = document.querySelector(".result");
  
    calculateButton.addEventListener("click", function () {
      const dob = new Date(dobInput.value);
      const today = new Date();
  
      // Calculate age
      let age = today.getFullYear() - dob.getFullYear();
      const monthDifference = today.getMonth() - dob.getMonth();
  
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < dob.getDate())
      ) {
        age--;
      }
  
      // Display result
      resultOutput.textContent = `Your age is ${age} years old`;
    });
  });
