var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(resp => resp.json())
    .then(translated => console.log(translated.contents.translated));
};

btnTranslate.addEventListener("click", clickEventHandler);