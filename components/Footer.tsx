import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-black-200 sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Write-It-Down
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-white-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/about-us" className="hover:underline">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase dark:text-white">
                Don&apos;t Follow us
              </h2>
              <ul className="text-white-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/ErickW01"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/erick-wakayu-a74480173/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Write-It-Down™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
