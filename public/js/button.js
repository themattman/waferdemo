// CREATE
$('.btn-success').click(function(e){
  //console.log('create', $('.create-box-key').val(), $('.create-box-value').val());
  wafer.create($('.create-box-key').val(), $('.create-box-value').val(), 'init', function(d){
    if(d.success) {
      alert(d.success);
    }
  });
});

// READ
$('.btn-info').click(function(e){
  //console.log('read');
  wafer.read($('.read-box-key').val(), function(d){
    if(d.success) {
      alert(d.value);
    }
  });
});

// UPDATE
$('.btn-warning').click(function(e){
  //console.log('update');
  wafer.update($('.update-box-key').val(), $('.update-box-value').val(), function(d){
    if(d.success) {
      alert(d.success);
    }
  });
});

// DELETE
$('.btn-danger').click(function(e){
  //console.log('delete');
  wafer.delete($('.delete-box-key').val(), function(d){
    if(d.success) {
      alert(d.success);
    }
  });
});