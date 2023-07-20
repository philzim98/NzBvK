import React from "react";

const MenuBar = () => {
  return (
    <nav className="bg-indigo-600 p-2 mt-0 w-full fixed top-0 z-10">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a className="text-white no-underline hover:text-white hover:no-underline">
            <span className="text-2xl pl-2">FlightFinder.de</span>
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-3">
              <a className="inline-block text-blue-200 no-underline hover:text-white hover:text-underline py-2 px-4 cursor-pointer">
                Flüge
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-blue-200 no-underline hover:text-white hover:text-underline py-2 px-4 cursor-pointer">
                Unterkünfte
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-blue-200 no-underline hover:text-white hover:text-underline py-2 px-4 cursor-pointer">
                Mietwagen
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-blue-200 no-underline hover:text-white hover:text-underline py-2 px-4 cursor-pointer">
                Pauschalreisen
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-blue-200 no-underline hover:text-white hover:text-underline py-2 px-4 cursor-pointer">
                Warenkorb
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline cursor-pointer">
                Mein Konto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
