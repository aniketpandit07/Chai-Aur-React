import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"


const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{bounceStiffness:600, bounceDamping:10}} className=" relative w-60 flex-shrink-0  h-72 rounded-[30px]  bg-zinc-900 text-white px-5 py-10 overflow-hidden">
        <FaRegFileAlt></FaRegFileAlt>
        <p className="text-sm  mt-5 font-semibold leading-tight">{data.desc}</p>

        <div className="footer absolute bottom-0 w-full left-0 ">
          {/* data */}
          <div className="flex items-center justify-between px-4 py-4 ">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600   rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            <div className={`tag w-full py-4  bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
              <h3 className="text-sm  font-semibold ">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
