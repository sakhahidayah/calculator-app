let result = document.getElementById("result");
let historyCalculation = document.getElementById("history");
let calculation = [];
let histroryResult = [];
const buttons = document.querySelectorAll(".btn");
const operator = document.querySelectorAll("#calculation");
const results = document.getElementById("results");
const deletes = document.getElementById("delete");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.value;
    calculation.push(value);
    result.textContent = calculation.join("");
  });
});

operator.forEach((operators) => {
  operators.addEventListener("click", () => {
    let values = operators.value;
    calculation.push(values);
    result.textContent = calculation.join("");
  });
});

results.addEventListener("click", () => {
  let resultsValues = calculation.join("");
  let finalResult = eval(resultsValues);
  result.textContent = finalResult;

  histroryResult = resultsValues;
  historyCalculation.textContent = histroryResult;
});

deletes.addEventListener("click", () => {
  let calculationValues = calculation;
  histroryResult = "";
  historyCalculation.textContent = "";
  deleteArray(calculationValues);

  function deleteArray(index) {
    for (let i = 0; i < index.length; i++) {
      index.splice(i);
    }
  }

  calculationValues.push(calculation);
  result.textContent = calculation;
});

// dark mode

const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const darkToggle = document.getElementById("darkToggle");
const lightToggle = document.getElementById("lightToggle");
const container = document.getElementById("container");


darkToggle.addEventListener("click", () => {
  lightMode.classList.remove("hidden");
  darkMode.classList.add("hidden");
  container.classList.remove("bg-white");
  container.classList.add("bg-[#151434]", "text-white");
  buttons.forEach((button) => {
    button.classList.remove("bg-[rgba(226,226,226,255)]");
    button.classList.add("bg-[#2d2b46]");
  });
});

lightToggle.addEventListener("click", () => {
  lightMode.classList.add("hidden");
  darkMode.classList.remove("hidden");
  container.classList.remove("bg-[#151434]", "text-white");
  container.classList.add("bg-white");
  buttons.forEach((button) => {
    button.classList.remove("bg-[#2d2b46]");
    button.classList.add("bg-[rgba(226,226,226,255)]");
  });
});
