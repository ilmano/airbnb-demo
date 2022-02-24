import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noGuest, setNoGuest] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () =>{
    setSearchInput("");
  };

  const search = ()=>{
    router.push({
      pathname:'/search',
      query:{
        location:searchInput,
        startDate:format(new Date(Date.parse(startDate.toISOString())),"dd MMMM yy"),
        endDate:format(new Date(Date.parse(endDate.toISOString())),"dd MMMM yy"),
        noGuest
      }
    })
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-slate-50 shadow-md p-5 md:px-10 ">
      {/*LEFT*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
        onClick={()=> router.push("/")}
          src={"https://links.papareact.com/qd3"}
          layout="fill"
          objectFit="contain"
          objectPosition={"left"}
        />
      </div>

      {/*MIDDLE*/}
      <div className="flex items-center md:border-2 rounded-full py-2 shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type={"text"}
          placeholder={placeholder||"Start your Search"}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">

          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD%861"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guest
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noGuest}
              onChange={(e) => setNoGuest(e.target.value)}
              min={1}
              type={"number"}
              className={"w-12 pl-2 text-lg outline-none text-red-400"}
            />
          </div>

          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
            <button className="flex-grow text-red-400" onClick={search}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
