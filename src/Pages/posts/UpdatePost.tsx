import { useLocation, useNavigate } from "react-router";
import { useUpdatePostMutation } from "../../features/posts/post.api";
import { Post } from "../../models/post.model";
import PostForm from "../../components/posts/PostForm";

const UpdatePost: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // In order to receive the post you followed from another page
  const { post } = location.state;
  const [updatePost] = useUpdatePostMutation();

  if (!post) {
    return <div>No post data found</div>;
  }

  const handleUpdate = (formData: Post) => {
    const updatedPost: Post = {
      ...formData,
      id: post.id,
      createdAt: post.createdAt,
    };
    updatePost(updatedPost)
      .unwrap()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
  };

  return (
    <div>
      <h1>Update Post: {post.title}</h1>
      <PostForm post={post} onSubmit={handleUpdate} />
    </div>
  );
};

export default UpdatePost;
