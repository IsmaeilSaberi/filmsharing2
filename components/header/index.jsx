import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-400 text-white h-[10vh] flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={"/"}
          className="text-green-800 text-lg transition-all duration-500 hover:text-black hover:scale-105"
        >
          فیلم اشتراک
        </Link>
        <nav>
          <ul className="flex gap-8 justify-start items-center">
            <li>
              <Link
                className="bg-white text-green-500 transition-all duration-500 hover:bg-gray-200 hover:scale-105 flex justify-center items-center w-20 h-8 rounded-md"
                href={"/"}
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                className="bg-white text-green-500 transition-all duration-500 hover:bg-gray-200 hover:scale-105 flex justify-center items-center w-20 h-8 rounded-md"
                href={"/movies"}
              >
                فیلم ها
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
  header;
};

export default Header;
