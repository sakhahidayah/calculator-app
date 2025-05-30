const result = document.getElementById("result");
let calculation = [];
const buttons = document.querySelectorAll("#btn");
const operator = document.querySelectorAll("#calculation");
const results = document.getElementById("results");
const deletes = document.getElementById('delete')
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    calculation.push(value);
    result.textContent = calculation.join("");
  });
});

operator.forEach((operators) => {
  operators.addEventListener("click", () => {
    const values = operators.value;
    calculation.push(values);
    result.textContent = calculation.join("");
  });
});

results.addEventListener("click", () => {
  result.value = eval();
});

deletes.addEventListener('click',() => {
  
})