import React from "react";
import { useGetCategoriesQuery } from "../../features/categories/category.api";
import { Category } from "../../models/category.model";
import { Post } from "../../models/post.model";
import { imageUrls } from "../../office/imageBank.lib";

interface PostFormProps {
  post?: Post;
  onSubmit: (FormData: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSubmit }) => {
  const { data: categories } = useGetCategoriesQuery("categories");
  const category = categories ? categories[0].name : "";

  const [formData, setFromData] = React.useState<Post>({
    title: post?.title || "",
    description: post?.description || "",
    image: post?.image || imageUrls[0],
    createdAt: post?.createdAt || "",
    category: post?.category || category,
  });

  // React.useEffect(() => {
  //   if (!formData.category && categories && categories.length > 0) {
  //     setFromData((prevData) => ({
  //       ...prevData,
  //       category: categories[0].name,
  //     }));
  //   }
  // });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // This is a non-parameterised function that will be executed when the user clicks on the ‘Regenerate’ button to select a new image, for example.

  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setFromData((prevData) => ({
      ...prevData,
      image: imageUrls[randomIndex],
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className=" block text-gray-700 font-bold mb-2">Image</label>
      <div className=" relative w-full bg-indigo-400/80 h-80 rounded-xl">
        <img
          className=" w-full rounded-xl h-full object-cover"
          src={formData.image || imageUrls[0]}
          alt=""
        />
      </div>
      <div
        className=" absolute bg-blue-500 hover:bg-blue-700 text-white bottom-5 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        onClick={getRandomImageUrl}>
        Regenerate
      </div>
      <div className=" mb-4">
        <label htmlFor="title" className=" block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className=" border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline              "
        />
      </div>
      <div className=" mb-4">
        <label htmlFor="category" className="">
          Category
        </label>
        <select
          id="category"
          value={formData.category}
          name="category"
          onChange={handleChange}>
          {categories &&
            categories.map((category: Category) => (
              <option
                key={category.id}
                value={category.name}
                selected={category.name === formData.category}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <div className=" mb-4">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className=" flex flex-row justify-end mt-2">
        <button
          type="submit"
          className=" absolute bg-blue-500 hover:bg-blue-700 text-white bottom-5 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PostForm;
