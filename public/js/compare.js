var timer_start = []
  , results = []
  , num = 0
  , num_iters = 11
;

for(var i = 0; i < num_iters; i++) {
  timer_start.push(new Date().getTime());
  $.get('http://localhost:3000/query?create=firstkey'+i+'&value=firstvalue', function(data) {
    var i_value = parseInt(data.key.substr(8,data.key.length-8), 10);
    console.log('i =', i_value);
    var timer_end = new Date().getTime();
    var diff = timer_end-timer_start[i_value];
    //console.log(data);
    console.log('time('+i_value+') = '+diff+' '+timer_end+' '+timer_start[i_value]);
    results.push(diff);

    //console.log('http://localhost:3000/query?delete=firstkey'+data.key[data.key.length-1]);
    $.get('http://localhost:3000/query?delete=firstkey'+i_value, function(data) {
      console.log(i_value, 'delete done');
      //console.log(data);
      num++;
      if(num === num_iters) totals();
    });
  });
}

function totals() {
  var sum = results.reduce(function(a, b) { return a + b });
  var avg = sum / results.length;
  console.log(timer_start);
  console.log(results);
  console.log(avg);
}
//$('.data-tbody').append();
