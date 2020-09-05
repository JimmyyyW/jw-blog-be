import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
});

export const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

