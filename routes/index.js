var io = require('socket.io')(3003);

io.on('connection', function(socket){
    socket.on('request-nurse-end', function(msg){
    io.emit('request-nurse-end-push', { for: 'everyone' });
    console.log('request-nurse-end-push sent');
  });
  socket.on('request-nurse', function(msg){
    io.emit('request-nurse-push', { for: 'everyone' });
    console.log('request-nurse-push sent');
  });
  socket.on('message-alert', function(msg){
    io.emit('message-alert', { for: 'everyone' });
    console.log('message-alert broadcasted');
  });
});

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("index");
});

router.get('/patient-profile', function(req, res, next) {
  res.render("patient");
});

module.exports = router;
