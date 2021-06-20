
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickHandleGuy(){

    console.log("button is clicked");
    console.log("input", txtInput.value);

}

btnTranslate.addEventListener("click", clickHandleGuy)

