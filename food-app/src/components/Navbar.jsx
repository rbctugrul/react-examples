import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div>
        <AiOutlineMenu size={30} />
      </div>
      <h1>
        Best <span>Eats</span>
      </h1>
    </div>
  );
};

export default Navbar;
