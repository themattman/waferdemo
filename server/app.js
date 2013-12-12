var express = require('express')
  , app     = express()
  , colors  = require('colors')
  , router  = require('./router.js')
  , config  = require('./config.js')
  , http    = require('http')

  /** WAFER **/
  , redis   = require('redis')
  , client  = redis.createClient()
  , wafer   = require('waferdb/wafer.js').server
;

wafer.init("redis", client);
client.on('error', function(err){
  console.log(err);
});


// setup here
config(app);


// ---------------------------------------------------------- //
// define API routes here
// ---------------------------------------------------------- //
// GET
app.get('/',          router.index   );
app.get('/compare1',  router.compare1);
app.get('/compare2',  router.compare2);
app.get('/query',     router.query   );
app.get('/graphs',    router.graphs  );
// ---------------------------------------------------------- //
// ---------------------------------------------------------- //


// start the server
var httpApp = http.createServer(app).listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')).blue);
});
