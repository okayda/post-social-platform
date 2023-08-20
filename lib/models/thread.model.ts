import mongoose from "mongoose";

// Pattern to insert and retrived data to the database
const threadSchema = new mongoose.Schema({
  text: { type: String, required: true },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
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
      ref: "Thread",
    },
  ],
});

// At the first place the model won't be exist so will create a new model after that will use the existed model
const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
