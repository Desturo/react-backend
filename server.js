const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})
const PORT = process.env.PORT || 3500

app.use(express.static('/var/www/html/build'));

app.get('/', (req, res) => {
  res.send('Hello Worlt!')
})

io.on('connection', (socket) => {

  socket.on('message-send', (data) => { 
    socket.broadcast.emit('message-recieve', { user: data.user, message: data.message})
  })
})



server.listen(PORT, () => {
})