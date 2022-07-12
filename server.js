import server from 'live-server';

// const server = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  root: './src',
  cors: true,
  open: false,
};

server.start(params);
