var express = require('express'),
    app = express();

//To deploy, you must set PORT as an environment variable
var port = process.env.PORT || 3000;

app.use('/dist', express.static(__dirname + '/dist'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
