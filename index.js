let inputField = document.getElementById('inputField');
let buttons = document.querySelectorAll('button');
let btnArray = Array.from(buttons);
let result = "";
btnArray.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.target.textContent === "DEL") {
            let currentValue = inputField.value;
            result = currentValue.substring(0, currentValue.length - 1);
            inputField.value = result;
        } else if (event.target.textContent === "AC") {
            result = "";
            inputField.value = result;
        } else if (event.target.textContent === "%") {
            result = result / 100;
            inputField.value = result;
        } else if (event.target.textContent === "=") {
            try {
                result = inputField.value;
                result = eval(result);
                inputField.value = result;
            } catch (error) {
                inputField.value = "Error";
            }

        } else {
            result += event.target.textContent;
            inputField.value = result;

        }
    });
});