import mongoose from "mongoose";

// Pattern to insert and retrived data to the database
const communitySchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  threads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thread" }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// At the first place the model won't be exist so will create a new model after that will use the existed model
const Community =
  mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;
