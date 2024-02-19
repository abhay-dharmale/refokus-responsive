import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "55%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "47%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "51%",
      left: "49%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "58%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "68%",
      left: "56%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) => 
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data*100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0,1]);
        break;
      case 3:
        imagesShow([0,1,2]);
        break;
      case 4:
        imagesShow([0,1,2,3]);
        break;
      case 8:
        imagesShow([0,1,2,3,4]);
        break;
      case 10:
        imagesShow([0,1,2,3,4,5]);
        break;
    }

  });

  return (
    <div className="w-screen h-[80vh] flex items-center justify-center pointer-events-none">
      <div className="w-full sm:max-w-screen-xl mx-auto sm:mx-auto sm:text-center">
        <h1 className="text-[39vw] leading-none tracking-light font-semibold absolute -left-[31%] top-[50%] rotate-[-90deg] sm:rotate-0 sm:left-[50%] sm:top-[2%] sm:-translate-x-[50%] m:-translate-y-[50%] ml-8">work</h1>
        <h1 className="text-[39vw] leading-none tracking-light font-semibold absolute left-[30%] top-[50%] rotate-[-90deg] sm:rotate-0 sm:hidden ml-8">work</h1>
        <h1 className="text-[39vw] leading-none tracking-light font-semibold absolute left-[-0.6%] bottom-[44.6%] rotate-[-90deg] sm:rotate-0 sm:hidden ml-8">work</h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-[40vw] sm:w-[18vw] rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
