const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// 设置静态文件目录，这里假设index.html位于根目录下

app.use(express.static(path.join(__dirname, '')));

// 处理POST请求到/generate-answer
app.post('/generate-answer', (req, res) => {
  const answer = Math.random() < 0.5 ? 'yes' : 'no';
  res.json({ answer });
});

console.log("Current directory:", __dirname);
console.log("Index.html path:", path.join(__dirname, 'index.html'));

const rootDir = path.resolve(__dirname, '..'); // 上一级目录，即项目根目录
// 或者如果index.html就在server.js同级目录，保持原样即可，无需改变

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));