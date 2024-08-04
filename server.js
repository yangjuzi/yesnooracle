require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // 引入axios库
const apiKey = process.env.API_KEY;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// 设置静态文件目录，这里假设index.html位于根目录下

app.use(express.static(path.join(__dirname, 'public')));

// 处理POST请求到/generate-answer
app.post('/generate-answer', (req, res) => {
  const answer = Math.random() < 0.5 ? 'yes' : 'no';
  res.json({ answer });
});

// 在引入路由之前定义callAIModel函数
// 定义callAIModel函数，使用API密钥调用第三方服务
const callAIModel = async (description, apiKey) => {
  try {
    const apiUrl = 'https://example-ai-service.com/api/v1/analyze'; // 替换为实际API地址
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`, // 假设API密钥以Bearer Token形式传递
    };
    const data = {
      description,
    };

    // 发起POST请求到第三方AI服务API
    const response = await axios.post(apiUrl, data, { headers });

    if (response.status === 200) {
      return response.data.answer; // 假设API响应包含一个answer字段
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error in callAIModel:', error);
    throw error;
  }
};

// 新增处理AI回答的逻辑
app.post('/generate-ai-answer', async (req, res) => {
  try {
      const { description } = req.body;
      const apiKey = 'your-api-key-here'; // 这里替换为你的实际API密钥
      const aiAnswer = await callAIModel(description); // 确保callAIModel是你实现的异步函数
      res.status(200).json({ aiAnswer });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error generating AI answer.');
  }
});


// 处理所有GET请求以返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));