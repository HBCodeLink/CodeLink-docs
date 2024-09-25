const init = () => {
  document.getElementById("button-send").addEventListener("click", calc);
};

const calc = function (e) {
  e.preventDefault();
  let guess = document.getElementById("guess");
};

document.addEventListener("DOMContentLoaded", init);
