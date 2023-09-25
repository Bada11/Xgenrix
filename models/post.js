import mongoose from "mongoose";

const Post = mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  image: { type: String, required: true },
});

const postSchema = mongoose.models || mongoose.model("Post", Post);

export default postSchema;
