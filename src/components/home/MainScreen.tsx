/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { customAnimation } from "@/pages";
import { Reveal } from "react-awesome-reveal";

export const MainScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black pt-28 md:px-36 sm:px-10 px-2 w-full relative">
      <img
        className="absolute w-full h-full top-0 left-0 opacity-50"
        src="/img/bgPortfolio.png"
        alt=""
      />

      <div className="flex flex-col gap-10 items-center justify-center relative p-4 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <img src="/logos/ac.png" className="md:w-1/2 w-full" alt="" />
        </div>

        <div className="md:flex hidden flex-col gap-2 items-center justify-center text-white sm:text-2xl text-lg w-full subTitleMain">
          <Reveal
            triggerOnce
            keyframes={customAnimation}
            duration={6000}
            className="overflow-hidden"
          >
            <div className="flex flex-row w-full justify-center whitespace-nowrap subTitleMain">
              Elevating IT expectations, creating high-value products for
              businesses.
            </div>
          </Reveal>
          <Reveal
            triggerOnce
            keyframes={customAnimation}
            duration={6000}
            className="overflow-hidden"
          >
            <div className="flex flex-row w-full whitespace-nowrap justify-center subTitleMain">
              Advance and Create for a brighter future.
            </div>
          </Reveal>
        </div>
        <div className="md:hidden flex flex-col gap-2 items-center justify-center text-white sm:text-2xl text-lg w-full">
          <div className="text-center w-full justify-center subTitleMain">
            Elevating IT expectations, creating high-value products for
            businesses.
          </div>

          <div className="text-center w-full justify-center subTitleMain">
            Advance and Create for a brighter future.
          </div>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/company/ac-it-company"
        target="_blank"
        className={clsx(
          "absolute bottom-10 mx-auto left-0 right-0 w-40 text-center hover:!text-[#000] hover:bg-white md:text-xl text-sm font-[450] px-4 py-2 rounded-md border border-[#000] cursor-pointer",
          "!text-white bg-[#000] transition-all duration-500",
        )}
      >
        Get In Touch
      </a>
    </div>
  );
};
