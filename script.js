const adviceText = document.querySelector("#advice");
const adviceNumber = document.querySelector("#adviceNumber");
const adviceBtn = document.querySelector(".dice");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const advice = await response.json();

  adviceNumber.textContent = "ADVICE #" + `${advice.slip.id}`;
  adviceText.textContent = `${advice.slip.advice}`;
}

getAdvice();

adviceBtn.addEventListener("click", () => {
  getAdvice();
});
