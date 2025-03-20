import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className=" flex space-x-4">
                  <a
                    href="#"
                    className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ">
                    Posts
                  </a>
                  <a
                    href="#"
                    className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium  ">
                    Categories
                  </a>
                  <a
                    href="#"
                    className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium  ">
                    About
                  </a>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-white bg-gray-700">
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-white bg-gray-700">
                About
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
