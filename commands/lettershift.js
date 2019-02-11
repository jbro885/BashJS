exports.run = (args) => {
  let errO = "";
  let err = false;
  if (args === [] || args.length<1) {
      return "Usage: lettershift <shift amount> <string>";
  }
  let charcode = 0;
  let result = '';
  let num = args[0];
  
  if(!num.match("^[0-9]*")) {
    err = true
    errO = "The shift amount must be an integer!"
  } else {
    num = parseInt(num)
  }
      
  let text = args.slice(1);
  text = text.join(" ");
  for (let i = 0; i < text.length; i++) {
    let letter = text[i].toLowerCase()
    if (letter!==" ") {
      if (letter.match("^[a-zA-Z]")) {
         charcode = (letter.charCodeAt()) + num;
         result += String.fromCharCode(charcode);
      } else {
          result+=letter
      }
    } else {
      result += " "
    }
  }
  return successError(err, result, errO); 
}

function successError(bool, normO, errO) {
  if(bool === true) {
    return errO
  } else if (bool === false) {
    return normO
  }
}