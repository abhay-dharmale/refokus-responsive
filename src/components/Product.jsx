import React from "react";
import Button from "./Button";

function Product({ elem, mover, index }) {
  return (
    <div className="w-full h-[23rem] py-20 text-white">
      <div
        onMouseEnter={() => {
          mover(index);
        }}
        className="max-w-screen-xl mx-auto sm:flex flx-col items-center justify-between"
      >
        <h1 className="text-5xl capitalize font-medium">{elem.title}</h1>
        <div className="dets w-full sm:w-1/4 flex flex-col items-start">
          <p className="mb-10">{elem.desc}</p>
          <div className="flex items-center justify-center gap-5">
            {elem.live && <Button />}
            {elem.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
