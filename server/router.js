var database;

// main page
exports.index = function(req, res){
  res.render('index', { title: 'WaferDB Demo' });
};

exports.second = function(req, res){
  res.render('second', { title: 'WaferDB Demo' });
};

exports.compare1 = function(req, res){
  res.render('compare1', { title: 'WaferDB' });
};

exports.compare2 = function(req, res){
  res.render('compare2', { title: 'OtherDB' });
};

exports.graphs = function(req, res){
  res.render('graphs', { title: 'Graphs' });
};

exports.query = function(req, res){
  //console.log('hit /query');

  console.log(req.query);
  if(req.query && req.query.create) {
    // CREATE
    database.insert({'_id': req.query.create, 'value': req.query.value}, function(err, result){
      if(err) {
        console.log(err);
        res.send({'error': 'error'});
      } else {
        res.send({'key': req.query.create, 'result': result});
      }
    });
  } else if(req.query && req.query.read) {
    // READ
    database.find({'_id': req.query.read}).limit(1).toArray(function(err, result){
      if(err) {
        console.log(err);
        res.send({'error': 'error'});
      } else {
        res.send(result);
      }
    });
  } else if(req.query && req.query.update) {
    // UPDATE
    database.update({'_id': req.query.update}, {'value': req.query.value}, function(err, result){
      if(err) {
        console.log(err);
        res.send({'error': 'error'});
      } else {
        res.send(result);
      }
    });
  } else if(req.query && req.query.delete) {
    // DELETE
    database.remove({'_id': req.query.delete}, function(err, result){
      if(err) {
        console.log(err);
        res.send({'error': 'error'});
      } else {
        console.log('result =', result);
        res.send({'key': req.query.delete, 'result': result});
      }
    });
  }
};

exports.giveDatabase = function(db) {
  database = db;
};
