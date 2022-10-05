const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server)
const PORT = process.env.PORT || 3500

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', (socket) => {
  console.log(`connected a new user: ${socket}`);
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})