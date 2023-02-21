var btntranslate = document.querySelector('#btn-translate');
var txtinput= document.querySelector('#input-text');
var txtoutput= document.querySelector(".output-txt");

// calling server url
var serverURL= "https://api.funtranslations.com/translate/minion.json";

// function to get api
function getURLHandler(text){
        return (serverURL + "?" +"text="+text);
}
function clickEventHandler(){

    var inputText = txtinput.value; 
    fetch(getURLHandler(inputText))
    .then(response => response.json())
    .then(json=>{
        var translatedvalue = json.contents.translated;
        // output
        txtoutput.innerText= translatedvalue;
    })
}

btntranslate.addEventListener("click", clickEventHandler)
