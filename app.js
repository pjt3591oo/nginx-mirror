const express = require('express');
const os = require("os");

const hostname = os.hostname();

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  console.log('/', hostname)
  return res.send(200, '/: ' + hostname);
})

app.get('/server1', (req, res) => {
  console.log('/server1', hostname)
  return res.send(200, '/server1: ' + hostname);
})

app.get('/server2', (req, res) => {
  console.log('/server2', hostname)
  return res.send(200, '/server2: ' + hostname);
})

app.get('/server1')

app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
})