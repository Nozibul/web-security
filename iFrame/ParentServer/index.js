import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath( import.meta.url ))
const app = express()
const port = 5000

app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get('/example1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'example1.html'))
})

app.get('/example2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'example2.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
