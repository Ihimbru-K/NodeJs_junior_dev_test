const app = require('express')();
const port = 8080;

app.listen(port, ()=>console.log(`it's alive on http://localhost:${port}`))