import express from 'express';
import { BlogPost } from './model/blog-post';
import path from 'path';

const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile(path.resolve('src', 'pages/index.html'))
});

router.post('/blog', (req, res) => {
    const post = new BlogPost({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    })
    post.save();
    res.send(post);
});

router.get('/blog', async (req, res) => {
    const posts = await BlogPost.find();
    res.send(posts);
});

router.delete('/blog/:id', async (req, res) => {
    const deletablePost = await BlogPost.findByIdAndDelete(req.params.id);
    res.send({ deletedPost: deletablePost })
})

export default router;
