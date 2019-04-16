BashJS
=================

https://bash-js.glitch.me

BashJS is a linux terminal emulator made in Express and NodeJs.

Simply start the server by opening the 'server.js' file in the main folder.


Make custom commands
------------

To make a command, simply make a .js file with the same name of your command. Example:
`/commands/date.js`
![alt text](https://cdn.glitch.com/cf0b5004-4472-447f-9db3-ef900cb08ff5%2FCapture.PNG?1546556875000)

In the command file, you will need to do so:

```
exports.run = (args) => {
  let date = new Date();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();

  let newdate = year + "/" + month + "/" + day;
  
  return newdate
}
```

To print the output to the terminal, simply return the string at the end of the file. To use arguments, just use the args array passed to the function.

---------------------
Made by Hrx and vKred

