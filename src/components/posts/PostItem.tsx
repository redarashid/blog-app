import React from "react";
import { Post } from "../../models/post.model";
import { truncate } from "../../office/utils.lib";
import { useDeletePostMutation } from "../../features/posts/post.api";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = (id?: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(id);
    }
  };

  return (
    <div className=" w-full flex flex-col">
      <div className=" relative w-full h-48 bg-gray-300 rounded-xl transition duration-300 ease-in-out transform hover:scale-105">
        <img
          className=" absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          src={post.image}
        />
        <span className=" absolute top-3 right-3 bg-black/80 text-xs text-white px-2.5 py-2 rounded-xl">
          {post.category}
        </span>
      </div>
      <h3 className=" text-xl font-semibold text-gray-900 text-ellipsis">
        {post.title}
      </h3>
      <p className=" text-gray-600 mt-2">{truncate(post.description, 300)}</p>
    </div>
  );
};

export default PostItem;
