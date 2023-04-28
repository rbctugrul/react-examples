import React from "react";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex items-center gap-3 h-20 p-5">
      <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">MovieApp</div>
      <div className="flex flex-1 items-center gap-2 border p-3">
        <input placeholder="Arama yapınız!" className="outline-none flex-1" type="text" />
        <BiSearch />
      </div>
    </div>
  );
};

export default Header;
