let path = "/";
let user = "user"
let bashString = "<font style='color: #4BE24B'>" + user + "@bashJS</font>:<font style='color: #4848D8'>" + path + "</font>$ "
let commandHistory = [];
let currentCommand;
let index = 0;
let console = document.getElementById("console");
let input = document.getElementById("commandinput");
let localCommands = ["clear"]

autosize(input)

window.onload = function() {
  console.innerHTML = bashString
  input.focus(true)
}

input.addEventListener("keyup", function(event) {
  input.focus()
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("secretbutton").click()
  }
});

$("textarea").keydown(function(e){
  if (e.keyCode === 13) {
    e.preventDefault();
    commandHistory.push(input.value)
    index = commandHistory.length - 1
  }
  if (e.keyCode === 38) {
    index !== 0 ? index = index - 1 : false
    commandHistory[index] === undefined ? input.value === "" : input.value = commandHistory[index]
  }
  if (e.keyCode === 40) {
    index === commandHistory.length || index === (commandHistory.length-1) ? index = index : index++
    commandHistory[index] === undefined ? input.value === "" : input.value = commandHistory[index]
  }
});

async function command() {
  let commandArgs = input.value.split(" ");
  let currentConsole = console.innerHTML;
  let inputValue = encodeHTML(input.value);
  let output = "";
  
  if(commandArgs[1] === null || commandArgs[1] === undefined || commandArgs[1] === "" || commandArgs[1] === " ") {
    commandArgs[2] = ""
  }
  
  output = await $.get("/commandRequests", { command: commandArgs[0], args: commandArgs.slice(1) } ).done(function( data ) {return data.join(" ")})
  if(output === false) {
    output = `bashJS: ${encodeHTML(commandArgs[0])}: command not found`
  }
  
  if(commandArgs[0] === null || commandArgs[0] === undefined || commandArgs[0] === "" || commandArgs[0] === " ") {
    input.value = "";
    console.innerHTML += inputValue + "<br><br>" + bashString
    input.scrollIntoView();
    return;
  }
  
  if(localCommands.indexOf(commandArgs[0]) !== -1) {
    switch(commandArgs[0]) {
      case "clear":
        clear()
        break;
    }
  }
  
  input.value = "";
  console.innerHTML += "<font id='output'>" + inputValue + "<br><br>" + output + "<br><br>" + bashString + "</font>"
  input.scrollIntoView();
}

function clear() {
  document.getElementById("joinmessage").innerHTML = "";
  console.innerHTML = bashString
  input.value = "";
  bashString.remove();
}

function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}