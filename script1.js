// This script is a quiz with questions on FromSoftware games - designed so that when the user chooses their answer, they are given feedback to let them know whether they chose the correct answer.
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitQuiz").addEventListener("click", function () {
    const questions = document.querySelectorAll(".question");
    questions.forEach((question, index) => {
      const answer = question.querySelector(".answer").value;
      const feedback = question.querySelector(".feedback");

      const correctAnswers = [
        "Firelink Shrine",
        "Gehrman, The First Hunter",
        "The Ringed City",
        "9",
        "Souls",
      ];

      if (answer === correctAnswers[index]) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Incorrect.";
        feedback.style.color = "red";
      }
    });
  });
});
// My Character creation script!
document
  .getElementById("characterClass")
  .addEventListener("change", function () {
    const classDescription = document.getElementById("classDescription");
    switch (this.value) {
      case "Knight":
        classDescription.textContent =
          "Knights are brave warriors skilled in melee combat.";
        break;
      case "Sorcerer":
        classDescription.textContent =
          "Sorcerers wield powerful magic spells to defeat their foes.";
        break;
      case "UCD Lecturer":
        classDescription.textContent =
          "UCD Lecturers are knowledgeable and can cast powerful academic spells.";
        break;
      default:
        classDescription.textContent = "Select a class to see its description.";
    }
  });
// This script is designed to allow the user to choose the difficulty of their new game.
window.addEventListener("DOMContentLoaded", (event) => {
  const slider = document.getElementById("difficultySlider");
  const display = document.getElementById("difficultyDisplay");

  const updateDisplay = (value) => {
    display.innerText = `Difficulty: ${value}`;
  };

  updateDisplay(slider.value);

  slider.addEventListener("input", function () {
    updateDisplay(this.value);
  });
});
// This script is for a moving gallery, set with 3 images which slide accross the gallery every 3 seconds (3k ms).
// This script also allows the user to change the picture with clickable arrows.
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  let currentIndex = 0;

  function showImage(index) {
    const imageWidth = 400;
    const newPosition = -index * imageWidth;
    gallery.style.transform = `translateX(${newPosition}px)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % gallery.children.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 3000);

  document.getElementById("prevButton").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + gallery.children.length) % gallery.children.length;
    showImage(currentIndex);
  });

  document.getElementById("nextButton").addEventListener("click", nextImage);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
});

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
