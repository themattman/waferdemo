// main page
exports.index = function(req, res){
  res.render('index', { title: 'WaferDB Demo' });
};

exports.second = function(req, res){
  res.render('second', { title: 'WaferDB Demo' });
};
