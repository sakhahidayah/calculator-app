let result = document.getElementById("result");
let calculation = [];
const buttons = document.querySelectorAll("#btn");
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
});

deletes.addEventListener("click", () => {
  let calculationValues = calculation;
  deleteArray();
  function deleteArray() {
    for (let i = 0; i < calculationValues.length; i++) {
      calculationValues.splice(i);
    }
  }
  calculationValues.push(calculation);
  result.textContent = calculation;
});
