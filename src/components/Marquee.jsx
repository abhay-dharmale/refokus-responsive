import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurl, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 13, repeat: Infinity }}
        className="flex flex-shrink-0 gap-10 sm:gap-20 py-8 pr-20"
      >
        {imagesurl.map((url, index) => (
          <img key={index} className="w-[19vw] sm:w-[5vw] flex-shrink-0" src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 13 }}
        className="flex flex-shrink-0 gap-10 sm:gap-20 py-8 pr-20"
      >
        {imagesurl.map((url, index) => (
          <img key={index} className="w-[19vw] sm:w-[5vw] flex-shrink-0" src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;

// {imagesurl.map((url, index) => <img key={index} className='w-[6vw] flex-shrink-0' src={url}/>)}
