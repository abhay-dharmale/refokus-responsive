import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { motion } from "framer-motion";


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="sm:max-w-screen-xl mx-auto py-5 px-4 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="navleft flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />
        <div className={`Links gap-14 ml-36 hidden sm:inline-flex ${isNavOpen ? 'hidden' : 'block'}`}>
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="h-5 w-[1px] bg-zinc-600"></span>
            ) : (
              <a key={index} href="#" className="text-sm flex items-center gap-1 font-thin">
                {index === 1 && (
                  <span
                    key={index}
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
      <div className="sm:hidden">
        {!isNavOpen ? (
          <TfiMenu className="text-xl mr-2" onClick={toggleNav} />
        ) : (
          <IoClose className="text-2xl mr-2 text-black" onClick={toggleNav} />
        )}
      </div>
      {/* Mobile Navbar */}
      {isNavOpen && (
        <motion.div className="fixed inset-0 z-50 flex justify-end transition-all">
          <div className="w-64 h-full shadow-lg bg-zinc-800">
            <div className="p-4 flex justify-end">
              <IoClose className="text-xl" onClick={toggleNav} />
            </div>
            <div className="Links flex flex-col gap-4 p-4">
              {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
                elem.length === 0 ? (
                  <span key={index} className="h-5 hidden sm:w-[1px] bg-zinc-600"></span>
                ) : (
                  <a key={index} href="#" className="text-sm font-thin">
                    {elem}
                  </a>
                )
              )}
            </div>
            <div className="p-4">
              <Button title="Get Started" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
