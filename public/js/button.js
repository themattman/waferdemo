// CREATE
$('.btn-success').click(function(e){
  console.log('create');
  wafer.create('btn', 'init', function(d){
  });
});

// READ
$('.btn-info').click(function(e){
  console.log('read');
  wafer.read('btn', function(d){
  });
});

// UPDATE
$('.btn-warning').click(function(e){
  console.log('update');
  wafer.update('btn', 'init', function(d){
  });
});

// DELETE
$('.btn-danger').click(function(e){
  console.log('delete');
  wafer.delete('btn', function(d){
  });
});