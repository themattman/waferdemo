// CREATE
$('.btn-success').click(function(e){
  wafer.create($('.create-box-key').val(), $('.create-box-value').val(), 'init', function(d){
    if(d.success) {
      alert(d.success);
    }
  });
});

// READ
$('.btn-info').click(function(e){
  wafer.read($('.read-box-key').val(), function(d){
    if(d.success) {
      alert(d.value);
    }
  });
});

// UPDATE
$('.btn-warning').click(function(e){
  wafer.update($('.update-box-key').val(), $('.update-box-value').val(), function(d){
    if(d.success) {
      alert(d.success);
    }
  });
});

// DELETE
$('.btn-danger').click(function(e){
  wafer.delete($('.delete-box-key').val(), function(d){
    if(d.success) {
      alert(d.success);
    }
  });
});

$("svg").append("circle").attr("cx", 30)
                         .attr("cy", 30)
                         .attr("r", 20);