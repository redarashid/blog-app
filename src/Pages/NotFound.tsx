import { Button, Flex } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className=" grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className=" text-center">
        <p className=" font-semibold text-base text-red-600">404</p>
        <h1 className=" font-bold sm:text-5xl text-3xl text-gray-900 tracking-tight mt-4">
          Page not found
        </h1>
        <p className=" mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className=" mt-10 flex items-center justify-center gap-x-6 font-semibold">
          <Link to="/">
            <Flex gap="small" wrap>
              <Button className=" font-semibold" type="primary">
                Go back home
              </Button>
            </Flex>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
