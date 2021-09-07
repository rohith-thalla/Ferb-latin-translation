var input = document.querySelector("#int");
var output = document.querySelector("#out");
var button = document.querySelector("#btn");
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function servercall(text){
    return serverURL + "?" + "text=" + text;
}

function errorhandling(error){
    console.log("error occured " + error)
    alert("Maximum server requests received, try again in an hour")
}

function clickeventhandler(){
    var inputtext = input.value;
    fetch(servercall(inputtext))
        .then(response => response.json())
        .then(json => output.innerText= json.contents.translated)
        .catch(errorhandling)
};
alert("The server is restricted to only 5 trials per hour if you encounter an error try again after an hour")
button.addEventListener("click",clickeventhandler)
