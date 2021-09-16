var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

function clickEventHandler() {
    txtOutput.innerText = txtInput.value;
};

btnTranslate.addEventListener("click", clickEventHandler);