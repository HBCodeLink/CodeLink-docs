const init = () => {
  document.getElementById("button-send").addEventListener("click", calc);
};

const colorsList = {
  HOT: "red",
  WARM: "orange",
  COOL: "blue",
  FREEZING: "lightblue",
  CORRECT: "green",
};

const genNUm = () => Math.floor(Math.random() * 100);
let num = genNUm();

const calc = function (e) {
  e.preventDefault();
  const el = document.getElementById("guess");
  const guess = el.value;
  let diff = Math.abs(num - parseInt(guess));
  let out;
  console.log(num);
  if (diff === 0) {
    out = "CORRECT";
    num = genNUm();
  } else if (diff <= 5) {
    out = "HOT";
  } else if (diff <= 10) {
    out = "WARM";
  } else if (diff <= 30) {
    out = "COOL";
  } else {
    out = "FREEZING";
  }
  document.getElementById("out").innerHTML = `${out}`;

  document.getElementById("out").style = `
  color: ${colorsList[out]}
  `;
};

document.addEventListener("DOMContentLoaded", init);
