import React from "react";

function Header() {
  return (
    <header className="py-4">
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full">
        {/* Left Part */}
        <div>
          <span className="text-xl text-white cursor-pointer font-bold ml-2">
            Sujan <span className="text-slate-400 font-bold">Anand</span>
          </span>
        </div>

        {/* Mid Part */}
        <div className="hidden sm:flex flex-row space-x-4">
          <p className="text-white cursor-pointer">About</p>

          <p className="text-white cursor-pointer">Skills</p>

          <p className="text-white cursor-pointer">Contact</p>
        </div>

        {/* Right Part */}
        <div className="flex space-x-3 items-center">
          <button className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
            Linkedin
          </button>

          <buttin className="border cursor-pointer border-gray-500 px-4 py-2 text-white rounded-full">
            Github
          </buttin>
        </div>
      </div>
    </header>
  );
}

export default Header;
