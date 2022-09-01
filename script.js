let input = document.getElementById("input");
let result = document.getElementById("result");
let buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", function (e) {
    let value = e.target.innerText;
    console.log(value);
    input.value += value;
  });
}

result.addEventListener("click", function () {
  let result = eval(input.value);
  input.value = result;
});
