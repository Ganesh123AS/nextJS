import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
},
    {timestamps: true}
);

let Post;
try {
  Post = mongoose.model("Post");
} catch (error) {
  Post = mongoose.model("Post", postSchema);
}

export default Post;