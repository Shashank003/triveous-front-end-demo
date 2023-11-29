import { Bookmark } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-6 ">
      <h1 className="tracking-[0.2em] text-2xl">THE OUTPOST</h1>
      <ul className="flex items-center gap-x-4 font-semibold">
        <li>
          <a href="/">AI tools</a>
        </li>
        <li>
          <a href="/">Submit</a>
        </li>
        <li>
          <a href="/">Newsletter</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
      </ul>
      <div className="flex gap-x-6 items-center">
        <Bookmark className="h-6 w-6 text-purple-800 fill-current" />
        <img
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          className="rounded-full h-6 w-6"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
