import mongoose from "mongoose";

// Pattern to insert and retrived data to the database
const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  onboarded: { type: Boolean, default: false },
});

// At the first place the model won't be exist so will create a new model after that will use the existed model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
