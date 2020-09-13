import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    content: { type: String }
});

export const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

