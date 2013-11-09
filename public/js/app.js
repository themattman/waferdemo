setTimeout(function(){
  wafer.get('1234', function(data){
    console.log(data);
  });
}, 2000);
