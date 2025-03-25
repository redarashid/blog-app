import { PaperClipIcon } from "@heroicons/react/20/solid";

const About = () => {
  return (
    <div>
      <div className=" mx-auto max-w-2xl py-3 sm:py-10 lg:py-18 mb-4 ">
        <div className=" text-center">
          <div className=" text-4xl font-bold sm:text-6xl tracking-tight">
            <h1 className="bg-clip-text text-transparent bg-[#21798b]">
              About
            </h1>
          </div>
          <p className=" mt-6 text-lg leading-8 text-gray-600">
            Personal information and application
          </p>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Rashid Reda
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Application for
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Frontend Developer
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              redarashid824@gmail.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              $3000
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              Frontend Development with React, Tailwind CSS, and Ant Design
              Building modern web applications requires efficient tools to
              create responsive, scalable, and maintainable interfaces. React,
              Tailwind CSS, and Ant Design (Antd) are three powerful
              technologies that, when combined, enable developers to build
              high-quality user interfaces with great flexibility and
              efficiency.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      aria-hidden="true"
                      className="size-5 shrink-0 text-gray-400"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        resume_front_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400">25.2kb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="https://docs.google.com/document/d/1LVARHRp3GvTfbPs50ZG-zVe-NcK8FzNh/edit?usp=sharing&ouid=116325559388912994155&rtpof=true&sd=true"
                      className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      aria-hidden="true"
                      className="size-5 shrink-0 text-gray-400"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        coverletter_front_end_developer.pdf
                      </span>
                      <span className="shrink-0 text-gray-400">28.0kb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a
                      href="https://docs.google.com/document/d/1LVARHRp3GvTfbPs50ZG-zVe-NcK8FzNh/edit?usp=sharing&ouid=116325559388912994155&rtpof=true&sd=true"
                      className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default About;
