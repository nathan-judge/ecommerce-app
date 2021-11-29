import express from 'express';
import chat from './controllers/chat';

const app = express();
const http = require('http').createServer(app);

app.get('/api', (req, res) => {
  res.json({
    data: 'Hello from nodejs api',
  })
})

http.listen(8000, () => console.log("Server is running on port 8000"));
chat(http);