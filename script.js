const changeButton = document.getElementById("change-button");
const learningStatus = document.getElementById("learning-status");


changeButton.addEventListener("click", function() {

  learningStatus.textContent = "I am currently learning JavaScript";
});
