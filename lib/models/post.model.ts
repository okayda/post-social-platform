import mongoose from "mongoose";

// Pattern to insert and retrived data to the database
const postSchema = new mongoose.Schema({
  text: { type: String, required: true },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  parentId: {
    type: String,
  },

  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

// At the first place the model won't be exist so will create a new model after that will use the existed model
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
