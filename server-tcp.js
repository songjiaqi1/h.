"use strict";

const http               = require('http');
const express            = require('express');
const RemoteTCPFeedRelay = require('./lib/remotetcpfeed');
const app                = express();

/**
* on the remote rpi run
* raspivid -t 0 -o - -w 1280 -h 720 -fps 25 | nc -k -l 5001
* to create a raw tcp h264 streamer
*/

  //public website

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/vendor/dist'));

// function iniServer(port){

const server  = http.createServer(app);

const feed    = new RemoteTCPFeedRelay(server, {
  feed_ip   : "192.168.1.55",
  feed_port : 8207,
});


server.listen(8081);

//
// exports.ini=iniServer;



