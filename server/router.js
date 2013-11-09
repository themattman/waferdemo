/*var mongo = require('./database.js')
;

mongo.connect(function(msg) {
  if(msg == null)
    console.log("Mongo Connected!");
  else 
    console.log(msg);
});*/

// main page
exports.index = function(req, res){
  res.render('index', { title: 'Matt Kneiser' });
};
