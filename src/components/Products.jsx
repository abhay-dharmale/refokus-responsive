import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  let products = [
    {
      title: "Architel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    // {
    //   title: "TTR",
    //   desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    //   live: true,
    //   case: false,
    // },
    // {
    //   title: "Maniv",
    //   desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    //   live: true,
    //   case: false,
    // },
    // {
    //   title: "YIR 2022",
    //   desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
    //   live: true,
    //   case: true,
    // },
    // {
    //   title: "Yahoo",
    //   desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
    //   live: true,
    //   case: true,
    // },
  ];

  const [position, setPosition] = useState(0);

  const mover = (val) => {
    setPosition(val * 23);
  };

  return (
    <div className="relative mt-32">
      {products.map((elem, index) => {
        return <Product key={index} elem={elem} mover={mover} index={index} />;
      })}
      <div className="absolute top-0 h-full w-full pointer-events-none rounded-lg overflow-hidden">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute h-[12rem] w-[20rem] sm:h-[23rem] sm:w-[30rem] left-[50%] top-[70%] sm:left-[45%] sm:top-0 overflow-hidden rounded-lg"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="h-full w-full"
          >
            <video
              loop
              muted
              src="../videos/Cula_promo_new_4_3.mp4"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="h-full w-full"
          >
            <video
              loop
              muted
              src="../videos/Maniv-Compressed.mp4"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="h-full w-full"
          >
            <video
              loop
              muted
              src="../videos/showcase_4_3.mp4"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="h-full w-full"
          >
            <video
              loop
              muted
              src="../videos/rocketchat.webm"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="h-full w-full"
          >
            <video
              loop
              muted
              src="../videos/rainfall.webm"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="h-full w-full"
          >
            <video
              loop
              muted
              src="../videos/summon.webm"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
