import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const PopupContainer = ({ children, setPopup, title, description ,center=false}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    body.style.height = "100vh";

    return () => {
      body.style.overflow = "auto";
      body.style.height = "100%";
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full bg-neutral-900/90 flex items-center justify-center z-[999]"
      // onClick={() => setPopup(false)}
    >
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        id="modal"
        className={`w-[95vw] md:w-1/2 bg-neutral-950 h-[90vh] py-12 px-6 rounded-lg border border-neutral-700 z-50 flex flex-col overflow-auto ${center && 'justify-center h-auto'}`}
      >
        <IoMdClose
          className="text-white absolute right-10 top-10 cursor-pointer"
          size={33}
          color="white"
          onClick={() => setPopup(false)}
        />
        <div className="mb-2 grid gap-4 pb-4">
          <p className="font-semibold text-2xl text-center">{title}</p>
          <div className="text-center">{description}</div>
        </div>
        <div>{children}</div>
      </motion.div>
    </div>
  );
};

export default PopupContainer;
