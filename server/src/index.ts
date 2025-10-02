import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

import pool from './db';

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// API endpoint to get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT slug, title, excerpt, date FROM posts ORDER BY date DESC');
    res.json(result.rows);
  } catch (err: any) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

// API endpoint to get a single post by slug
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE slug = $1', [slug]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(result.rows[0]);
  } catch (err: any) {
    console.error('Error fetching post:', err);
    res.status(500).json({ message: 'Failed to fetch post' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});