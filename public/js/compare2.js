var timer_start = []
  , results = []
  , num = 0
  , num_iters = 50
;

go();

//for(var i = 0; i < num_iters; i++) {
function go() {
  timer_start.push(new Date().getTime());
  //$.get('http://localhost:3000/query?create=firstkey'+num+'&value=firstvalue', function(data) {
  $.get('http://localhost:3000/query?read=firstkey', function(data) {
    var i_value = num;//parseInt(data.key.substr(8,data.key.length-8), 10);
    var timer_end = new Date().getTime();
    var diff = timer_end-timer_start[i_value];
    results.push(diff);

    console.log('time('+i_value+') = '+diff+' '+timer_end+' '+timer_start[i_value]);

    //$.get('http://localhost:3000/query?delete=firstkey'+i_value, function(data) {
      //console.log(i_value, 'delete done');
      num++;
      if(num === num_iters) {
        totals();
      } else {
        go();
      }
    //});
  });
}

function totals() {
  var sum = results.reduce(function(a, b) { return a + b });
  var avg = sum / results.length;
  //console.log(timer_start);
  console.log(results);
  console.log(avg);
}
//$('.data-tbody').append();
