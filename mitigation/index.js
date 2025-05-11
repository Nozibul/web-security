import express from "express";
import path from "path";
const app = express();
const port = 3000;


// CSP Middleware (must be first)
// 'unsafe-inline'(Not recommended is needed for inline scripts or Nonce(recommended)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'nonce-randomKey' http://unsecure.com"
  );
  next();
});

// Log CSP reports
// app.post('/csp-violation-report', express.json({ type: 'application/csp-report' }), (req, res) => {
//   console.log("🚨 CSP Violation Report:", JSON.stringify(req.body, null, 2));
//   res.status(204).end();
// });


// Static files
app.use(express.static("public"));

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
