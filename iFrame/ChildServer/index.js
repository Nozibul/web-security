import express from 'express'
import path from 'path' ;
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath( import.meta.url ))
const app = express()
const port = 5001

// define Route
app.get('/iframe-website1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'iframe-website1.html'))
})

app.get('/iframe-website2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'iframe-website2.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
