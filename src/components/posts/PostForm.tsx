import { Post } from "../../models/post.model";

interface PostFormProps {
    post?: Post,
    onSubmit: (FormData: Post) => void;
}



const PostForm: React.FC<PostFormProps> = ({post, onSubmit}) => {


};

export default PostForm;
