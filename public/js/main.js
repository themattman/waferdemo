$(function() {
	console.log('test')

  var socket = io.connect('http://localhost:9000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
});