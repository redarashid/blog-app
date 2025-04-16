import React from "react";
import { useNavigate } from "react-router";
import { Post } from "../../models/post.model";
import { useAddNewPostMutation } from "../../features/posts/post.api";
import PostForm from "../../components/posts/PostForm";

const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const [addNewPost, response] = useAddNewPostMutation();

  const handleCreatePost = (formtData: Post) => {
    const newPost: Post = {
      ...formtData,
      createdAt: new Date().toISOString(),
    };
    addNewPost(newPost)
      .unwrap()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
  };
  return (
    <div>
      <h1 className=" text-2xl font-bold mt-3 mb-4">Create Post</h1>
      <PostForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default CreatePost;
