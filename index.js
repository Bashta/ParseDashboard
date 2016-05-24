// Example express application adding the parse-dashboard module to expose Parse Dashboard compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');

var dashboard = new ParseDashboard({
  apps: [
    {
      //dont forget to update the docker file!
      appId: "",
      masterKey: "",
      serverURL: "",
      appName: "",
      production: true
    },
      ],
users: [
          {
      user: "administator",
      pass: "password"
          }
        ],

});
var app = express();
app.enable('trust proxy');

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = process.env.PORT || 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});
