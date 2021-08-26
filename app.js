const celciusInput = document.querySelector("#celcius");
const farenheitInput = document.querySelector("#farenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");
const h1 = document.querySelector(".title");

tempInputs.forEach(function (input) {
  input.addEventListener("input", function (e) {
    //console.log(e.target.value);

    let tempValue = parseInt(e.target.value);
    let inputName = e.target.name;
  });
});

h1.addEventListener("click", function (e) {
  console.log(e);
});
