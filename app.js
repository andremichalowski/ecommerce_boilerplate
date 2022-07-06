const express = require('express')
const app = express()

app.get('/', (req, res)=> {
  res.send("Res sent from app.js")
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})