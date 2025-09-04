/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Link from "next/link";
import * as React from "react";

export const ProjectItem: React.FC<any> = ({
  className,
  name,
  link,
  image,
  description,
  hover,
  havePrize,
}) => {
  return (
    <Link href={link}>
      <div
        className={clsx(
          className,
          "flex flex-col items-center justify-center border-[0.25px] border-[#555] rounded-lg",
          {
            ["hover:!border-[#9b1b17] xl:w-[800px] lg:w-[500px] w-full"]: hover,
          },
          { ["w-full"]: !hover },
          "transition-all duration-500  overflow-hidden cursor-pointer relative",
        )}
      >
        <img src={image} className="w-full" alt="" />
        <div className="absolute w-full h-full bg-[#00000066]"></div>
        {havePrize && (
          <Tippy content={havePrize}>
            <p className="absolute top-4 right-4 text-3xl">🥇</p>
          </Tippy>
        )}
        <div className="flex flex-col md:p-4 p-2 md:gap-2 gap-1 items-center justify-center absolute bottom-0 bg-[#000000dd] w-full">
          <div className="flex items-center justify-center md:text-2xl text-sm text-[#b10600] font-[500] subTitleMain">
            {name}
          </div>
          <div className="sm:!text-[14px] sm:!block hidden text-[10px] text-white w-full text-center sm:px-10 subTitleMain !font-thin">
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
};
