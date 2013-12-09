function build_graph(d) {
  function data(results) {
    return [
      {
        values: results,
        key: 'WaferDB',
        color: '#ff7f0e'
      }
    ];
  }
  
  var dataset = data(d);

  nv.addGraph(function() {
    var chart = nv.models.multiBarChart();

    chart.xAxis
        .axisLabel('Trial (n)')
        .tickFormat(d3.format(',r'));

    chart.yAxis
        .axisLabel('Time (ms)')
        .tickFormat(d3.format(',r'));

    d3.select('#chart svg')
        .datum(dataset)
        .transition().duration(500)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
}
