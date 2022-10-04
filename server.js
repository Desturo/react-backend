const express = require('express')
const app = express()
const port = process.env.PORT || 3500

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("test");
//This is a test