
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#translateout");


function clickHandleGuy(){

    outputDiv.innerText = "something "+ txtInput.value;

}

btnTranslate.addEventListener("click", clickHandleGuy)

