var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

console.log(txtOutput);

function clickEventHandler(){
    console.log("Clicked!");
    console.log("input", txtInput.value);
}


btnTranslate.addEventListener("click", clickEventHandler)












var url = "https://api.funtranslations.com/translate/minion.json"

