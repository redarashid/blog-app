import { useGetCategoriesQuery } from "../../features/categories/category.api";
import { Post } from "../../models/post.model";
import { imageUrls } from "../../office/imageBank.lib";

interface PostFormProps {
  post?: Post;
  onSubmit: (FormData: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSubmit }) => {

    const [data: categories] = useGetCategoriesQuery('categories');
    const category = categories ? categories[0].name : "";
    
  const [formData, setFromData] = React.useState<Post>({
    title: post?.title || "",
    description: post?.description || "",
    image: post?.image || "",
    createdAt: post?.createdAt || "",
    category: post?.category || "",
  });



  const handleChange = (e: React.ChangeEvent<HTMLImageElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFromData((prevData)=> ({
        ...prevData,
        [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  }

  // This is a non-parameterised function that will be executed when the user clicks on the ‘Regenerate’ button to select a new image, for example.

  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setFromData((prevData)=> ({
      ...prevData,
      image: imageUrls[randomIndex]
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className=" block text-gray-700 font-bold mb-2">
        Image
      </label>
      <div className=" relative w-full bg-indigo-400/80 h-80 rounded-xl">
        <img className=" w-full rounded-xl h-full object-cover" src={formData.image || imageUrls[0]} alt=""/>
      </div>
      <div className="bg-blue-500 hover:bg-blue-700 text-white bottom-5 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer" onClick={getRandomImageUrl}>Regenerate</div>
    </form>
  )
};

export default PostForm;
