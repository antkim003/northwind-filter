'use strict';

var app    = require('./app');
var db     = require('./db.js');

var port = process.env.PORT || 1337;

app.listen(port, function() {
  console.log('server read at http://localhost:' + port);
});


