const http = require('http')
const app = require('./app')
const port = 3001;
//request = בקשה //response = תגובה
const servsr = http.createServer(app)
servsr.listen(port)