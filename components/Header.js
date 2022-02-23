import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-slate-50 shadow-md p-5 md:px-10 ">
      {/*LEFT*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={"https://links.papareact.com/qd3"}
          layout="fill"
          objectFit="contain"
          objectPosition={"left"}
        />
      </div>

      {/*MIDDLE*/}
      <div className="flex items-center md:border-2 rounded-full py-2 shadow-sm">
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type={"text"}
          placeholder={"Start your Search"}
        />
        <SearchIcon className=" hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2" />
      </div>

      {/*RIGHT*/}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become A host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;