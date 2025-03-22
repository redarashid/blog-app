import CategoryItem from "../../components/categories/CategoryItem";

const Category = () => {
  return (
    <>
      <div className=" mx-auto max-w-2xl py-3 sm:py-10 lg:py-18 mb-4">
        <div className=" text-center">
          <h1 className=" text-4xl font-bold sm:text-6xl tracking-tight">
            Categories
          </h1>
          <p className=" mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {categories && categories.map((category)=> <CategoryItem key={category.id} category={category} />)}
      </div>
    </>
  );
};

export default Category;
