const express = require('express')
const app = express()
const port = 3000;
// app.disable('x-powered-by')

// manually remove header
app.use((req, res, next) => {
    res.removeHeader("X-Powered-By");
    next();
});

app.get('/list', (req, res) => {
  res.send({
    "id": 1,
    "name": "Nozibul",
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
