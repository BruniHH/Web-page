function submitRating() {
  const rating = parseInt(document.getElementById("ratingInput").value);
  const message = document.getElementById("ratingMessage");

  if (rating >= 1 && rating <= 10) {
    message.textContent = `Спасибо за вашу оценку: ${rating}/10!`;

    if (rating >= 1 && rating <= 3) {
      message.style.color = "red";
    } else if (rating >= 4 && rating <= 6) {
      message.style.color = "orange";
    } else if (rating >= 7 && rating <= 10) {
      message.style.color = "green";
    }
  } else {
    message.textContent = "Пожалуйста, введите число от 1 до 10.";
    message.style.color = "gray";
  }
}