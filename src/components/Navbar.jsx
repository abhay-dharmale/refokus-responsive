import React from "react";
import Button from "./Button";
import { TfiMenu } from "react-icons/tfi";

function Navbar() {
  return (
    <div className="sm:max-w-screen-xl mx-auto py-5 px-4 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="navleft flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />
        <div className="Links gap-14 ml-36 hidden sm:inline-flex">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <sapn key={index} className="h-5 w-[1px] bg-zinc-600"></sapn>
            ) : (
              <a key={index} href="#" className="text-sm flex items-center gap-1 font-thin">
                {index === 1 && (
                  <span key={index}
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-[5px] h-[5px] bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
          <TfiMenu className="text-xl mr-2 sm:hidden" />
    </div>
  );
}

export default Navbar;
