const showNumber = document.querySelector(".show__number");
const numbers = document.querySelectorAll("[data-name=number]");
const clearScreen = document.querySelector("[data-name=AC]");
const equalVALUE = document.querySelector("[data-name=equal__value]");
const add = document.querySelector("[data-name=add]");
const divided = document.querySelector("[data-name=divides]");
const times = document.querySelector("[data-name=times]");
const minus = document.querySelector("[data-name=minus]");
const removeElement = document.querySelector("[data-name=remove]");
const body = document.querySelector("body");
const toggleBackGroundColor = document.querySelector(
  ".toggle-switch-background",
);
toggleBackGroundColor.addEventListener("click", () => {
  body.classList.toggle("change__background__color");
});

clearScreen.addEventListener("click", () => {
  showNumber.innerHTML = "0";
});
numbers.forEach((el) => {
  el.addEventListener("click", () => {
    showNumber.textContent == 0 ? (showNumber.innerHTML = "") : null;
    showNumber.innerHTML += el.textContent;
  });
});

const showOperation = (operation, el) => {
  operation.addEventListener("click", () => {
    el.innerHTML += operation.textContent;
  });
};

showOperation(add, showNumber);
showOperation(divided, showNumber);
showOperation(times, showNumber);
showOperation(minus, showNumber);

equalVALUE.addEventListener("click", () => {
  const expression = showNumber.textContent
    .replaceAll("×", "*")
    .replaceAll("÷", "/");

  const lastChar = expression.at(-1);
  if ("+-*/".includes(lastChar)) {
    return;
  }

  const result = eval(expression);
  showNumber.textContent = result;
});

removeElement.addEventListener("click", () => {
  const remove = showNumber.textContent.slice(
    0,
    showNumber.textContent.length - 1,
  );
  showNumber.innerHTML = remove || 0;
});
