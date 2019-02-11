exports.run = (args) => {
  args = args.join(' ')
  let letters = args.split('');
  let output = "";
  let n = 0;
  
  for (let i=0; i<letters.length;i++) {
    if(n >= 5) n = 0
      switch (n) {
        case 0:
          output += "<font style='color:red'>" + letters[i] + "</font>"
          break;
        case 1:
          output += "<font style='color:orange'>" + letters[i] + "</font>"
          break;
        case 2:
          output += "<font style='color:yellow'>" + letters[i] + "</font>"
          break;
        case 3:
          output += "<font style='color:green'>" + letters[i] + "</font>"
          break;
        case 4:
          output += "<font style='color:blue'>" + letters[i] + "</font>"
          break;
        case 5:
          output += "<font style='color:purple'>" + letters[i] + "</font>"
          break;
      }
    n++
  }
  return output
}
