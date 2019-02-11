const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/commandRequests', function(req, res) {
  let command = req.query.command
  let args = req.query.args
  
  try {
    let commandFile = require(`./commands/${command}.js`);
    let result = commandFile.run(args);
    res.send(result)
  } catch (err) {
    res.send(false);
  }
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
