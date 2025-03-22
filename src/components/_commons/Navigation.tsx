import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { classNames } from "../../office/utils.lib";

const Navigation = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2">
            <div className=" relative flex items-center justify-between h-16">
              <div className=" absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className=" relative inline-block items-center justify-between rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  <span className=" absolute -inset-0.5" />
                  <span className=" sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className=" block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className=" block h-6 w-6" aria-hidden="false" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className=" text-center">
                  <div className=" hidden sm:ml-6 sm:block">
                    <div className=" flex space-x-4">
                      <NavLink
                        to="/"
                        className={({ isActive }) => {
                          return classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          );
                        }}>
                        Posts
                      </NavLink>
                      <NavLink
                        to="/categories"
                        className={({ isActive }) => {
                          return classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          );
                        }}>
                        Categories
                      </NavLink>

                      <NavLink
                        to="/about"
                        className={({ isActive }) => {
                          return classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          );
                        }}>
                        About
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  );
                }}>
                Posts
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  );
                }}>
                Categories
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  );
                }}>
                About
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
