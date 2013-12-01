setTimeout(function(){
  console.log(wafer);
  wafer.create('matt', 'age50', function(data){
    //console.log('app.create_cb', data);
    //wafer.read('matt', function(res){
      //console.log(res);
      wafer.update('matt', 'funny', function(res){
        //console.log('app.update_cb', res);

        /*setTimeout(function(){
          wafer.read('matt', function(res){
            console.log(res);
            wafer.delete('matt', function(res){
              console.log(res);
              wafer.read('matt', function(res){
                console.log(res);
              });
            });
          });
        }, 2000);*/

      });
    });
  //});
}, 2000);
