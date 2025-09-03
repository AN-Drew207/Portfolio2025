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
}) => {
  return (
    <Link href={link}>
      <div
        className={clsx(
          className,
          "flex flex-col items-center justify-center border-[0.25px] border-[#555] rounded-lg",
          { ["hover:scale-[105%] xl:w-[800px] sm:w-[500px] w-full"]: hover },
          { ["w-full"]: !hover },
          "transition-all duration-500  overflow-hidden cursor-pointer relative",
        )}
      >
        <img src={image} className="w-full" alt="" />
        <div className="absolute w-full h-full bg-[#00000066]"></div>
        <div className="flex flex-col md:p-4 p-2 md:gap-2 gap-1 items-center justify-center absolute bottom-0 bg-[#000000dd] w-full">
          <div className="flex items-center justify-center md:text-2xl text-sm text-[#b10600] font-[500]">
            {name}
          </div>
          <div className="text-[14px] text-white w-full text-center px-10">
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
};
