const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// 设置静态文件目录，这里假设index.html位于根目录下

app.use(express.static(path.join(__dirname, 'static')));

// 处理POST请求到/generate-answer
app.post('/generate-answer', (req, res) => {
  const answer = Math.random() < 0.5 ? 'yes' : 'no';
  res.json({ answer });
});



// 处理所有GET请求以返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});



const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));