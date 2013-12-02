var express = require('express')
  , app     = express()
  , colors  = require('colors')
  , router  = require('./router.js')
  , config  = require('./config.js')
  , secret  = require('./secret.js')
  , http    = require('http')

  , connect_string = "mongodb://"+secret.db.user+":"+secret.db.pass+"@"+secret.db.url+":"+secret.db.port+"/"+secret.db.name

  /** WAFER **/
  , redis   = require('redis')
  , client  = redis.createClient()
  , mongo   = require('mongodb').MongoClient
  , wafer   = require('waferDB.js/wafer.js').server
;

wafer.init("redis", client);
client.on('error', function(err){
  console.log(err);
});

// Connect to MongoDB
/*mongo.connect(connect_string, function(msg, db) {
  if(msg == null) {
    console.log("Mongo Connected!".yellow);
    wafer.init("mongodb", db.collection('waferdb'));
  } else 
    console.log(msg);
});*/

// setup here
config(app);


// ---------------------------------------------------------- //
// define API routes here
// ---------------------------------------------------------- //
// GET
app.get('/', router.index);
app.get('/2', router.second);
// ---------------------------------------------------------- //
// ---------------------------------------------------------- //




// start the server
var httpApp = http.createServer(app).listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')).blue);
});