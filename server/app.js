var express = require('express')
  , app     = express()
  , colors  = require('colors')
  , router  = require('./router.js')
  , config  = require('./config.js')
  , secret  = require('./secret.js')
  , http    = require('http')

  , connect_string_remote = "mongodb://"+secret.db.user+":"+secret.db.pass+"@"+secret.db.url+":"+secret.db.port+"/"+secret.db.name
  , connect_string_local  = "mongodb://"+secret.db.user+":"+secret.db.pass+"@localhost:27017/"+secret.db.name
  , connect_string        = connect_string_remote

  /** WAFER **/
  //, redis   = require('redis')
  //, client  = redis.createClient()
  , wafer   = require('waferdb/wafer.js').server
;

/*
wafer.init("redis", client);
client.on('error', function(err){
  console.log(err);
});*/


// Connect to MongoDB
var mongo = require('mongodb').MongoClient;
mongo.connect(connect_string, function(msg, db) {
  if(msg == null) {
    require('./router').giveDatabase(db.collection('waferdb'));
    console.log("Mongo Connected!".yellow);
    wafer.init("mongodb", db.collection('waferdb'));
  } else {
    console.log(msg);
  }
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
// ---------------------------------------------------------- //
// ---------------------------------------------------------- //




// start the server
var httpApp = http.createServer(app).listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')).blue);
});
