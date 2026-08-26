const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let allPosts = [];

app.get('/posts', async (req, res) => {
  if (allPosts.length > 0) {
    return res.json(allPosts);
  }
  let data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  allPosts = data.data;
  res.json(allPosts);
});

app.delete('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  allPosts = allPosts.filter(post => post.id !== postId);
  res.json(allPosts);
});

app.post('/newPost', (req, res) => {
  const newPost = { ...req.body, id: allPosts.length + 1 };
  allPosts.push(newPost);
  res.json(newPost);
});

app.put('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, body } = req.body;
  let post = allPosts.find(post => post.id === postId);
  if (!post) {
    return res.status(404).json({ error: 'post not found' });
  }
  post.title = title;
  post.body = body;
  res.json(post);
});

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});