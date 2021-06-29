let btn = document.querySelector("#btn");
let anwer = document.getElementById("answer");
let counter = 0;
let count = document.getElementById("count");
let wanted = parseInt(100 * Math.random());
let input = document.getElementById("num");
num.addEventListener("keyup", function (event) {
  if (event.code == "Enter" || event.code == "NumpadEnter") {
    checkedNumber();
  }
});
btn.addEventListener("click", checkedNumber);
function checkedNumber() {
  let num = document.getElementById("num").value;
  counter++;
  count.innerHTML = "Number of attemps: " + counter;
  if (parseInt(num) === wanted) {
    answer.textContent = "Congrats!!";
  } else if (parseInt(num) < wanted) {
    answer.textContent = "Try Higher Numbers!!";
  } else if (parseInt(num) > wanted) {
    answer.textContent = "Try Lower Numbers!!";
  } // location.reload();
}
