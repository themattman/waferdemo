nv.addGraph(function() {
  var chart = nv.models.multiBarChart();

  chart.xAxis
      .axisLabel('Trial (n)')
      .tickFormat(d3.format(',r'));

  chart.yAxis
      .axisLabel('Time (ms)')
      .tickFormat(d3.format(',r'));

  d3.select('#chart svg')
      .datum(data())
      .transition().duration(500)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});


function data() {
  var waferdb = [{x:1,y:31},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:5,y:1},{x:6,y:1},{x:7,y:1},{x:8,y:1},{x:9,y:1},{x:10,y:1},{x:11,y:1},{x:12,y:2},{x:13,y:1},{x:14,y:1},
    {x:15,y:2},{x:16,y:1},{x:17,y:2},{x:18,y:2},{x:19,y:2},{x:20,y:2},{x:21,y:1},{x:22,y:2},{x:23,y:2},{x:24,y:2},{x:25,y:3},{x:26,y:2},{x:27,y:2},{x:28,y:3},
    {x:29,y:3},{x:30,y:4},{x:31,y:3},{x:32,y:3},{x:33,y:2},{x:34,y:3},{x:35,y:3},{x:36,y:3},{x:37,y:2},{x:38,y:3},{x:39,y:4},{x:40,y:4},{x:41,y:4},{x:42,y:3},
    {x:43,y:4},{x:44,y:4},{x:45,y:3},{x:46,y:4},{x:47,y:4},{x:48,y:3},{x:49,y:4},{x:50,y:4}],
      otherdb = [{x:1,y:12},{x:2,y:16},{x:3,y:6},{x:4,y:11},{x:5,y:6},{x:6,y:4},{x:7,y:3},{x:8,y:4},{x:9,y:4},{x:10,y:5},{x:11,y:3},{x:12,y:4},{x:13,y:6},{x:14,y:4},
    {x:15,y:5},{x:16,y:3},{x:17,y:3},{x:18,y:3},{x:19,y:4},{x:20,y:3},{x:21,y:3},{x:22,y:4},{x:23,y:3},{x:24,y:4},{x:25,y:4},{x:26,y:4},{x:27,y:4},{x:28,y:3},
    {x:29,y:3},{x:30,y:5},{x:31,y:4},{x:32,y:4},{x:33,y:3},{x:34,y:4},{x:35,y:4},{x:36,y:3},{x:37,y:3},{x:38,y:4},{x:39,y:3},{x:40,y:4},{x:41,y:3},{x:42,y:4},
    {x:43,y:7},{x:44,y:4},{x:45,y:5},{x:46,y:6},{x:47,y:6},{x:48,y:4},{x:49,y:3},{x:50,y:6}];

  return [
    {
      values: waferdb,
      key: 'WaferDB',
      color: '#ff7f0e'
    },
    {
      values: otherdb,
      key: 'OtherDB',
      color: '#2ca02c'
    }
  ];
}
