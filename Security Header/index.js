const express = require('express')
const app = express()
const port = 3000;
// app.disable('x-powered-by')

const redirectToHttps = (req, res, next) => {
  if(req.headers['x-forwarded-proto'] !== 'https') {
    // Redirect to https
    return res.redirect('https://' + req.hostname + req.url);
  }
  next();
}
app.use(redirectToHttps);
// manually remove header
app.use((req, res, next) => {
    res.setHeader("Referer-Policy", "no-referrer");
    res.removeHeader("X-Powered-By");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
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
