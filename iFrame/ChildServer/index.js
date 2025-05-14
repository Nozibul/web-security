import express from 'express'
import path from 'path' ;
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath( import.meta.url ))
const app = express()
const port = 5001

// practice for iframe-website3
// app.use((req, res, next)=>{
//   res.setHeader('Content-Security-Policy', "frame-ancestors 'none'")
//   next();
// })
// define Route
app.get('/iframe-website1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'iframe-website1.html'))
})

app.get('/iframe-website2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'iframe-website2.html'))
})

app.get('/iframe-website3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'iframe-website3.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
