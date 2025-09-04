import Typewriter from "typewriter-effect";

export const About = () => {
  return (
    <div
      className="flex md:flex-row flex-col items-center justify-center w-full pb-64 pt-48 md:px-36 px-10 gap-16 relative bg-white"
      id="about"
    >
      <img
        className="absolute w-full h-full top-0 left-0 opacity-100"
        src="/img/bgAboutUs.png"
        alt=""
      />
      <div className="flex flex-col items-center gap-6 md:w-1/2 w-full relative">
        <h2 className="flex text-center md:text-4xl text-2xl titleLogo text-primary whitespace-nowrap">
          <span className="text-[#000] font-bold pr-2">{"< "}</span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("About Us")
                .pauseFor(3000)
                .deleteChars(2)
                .typeString("AC")
                .pauseFor(3000)
                .deleteAll()
                .start();
              setInterval(() => {
                typewriter
                  .typeString("About Us")
                  .pauseFor(3000)
                  .deleteChars(2)
                  .typeString("AC")
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }, 10000);
            }}
          />
          <span className="text-[#000] font-bold">{"/ >"}</span>
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-justify md:text-[16px] text-md font-medium text-[#000]">
            AC is a dedicated company committed to enhancing and actualizing the
            IT expectations of businesses. Our primary objective is to develop
            high value products that not only meet the needs of enterprises but
            also elevate the user experience. With AC, aspire towards a future
            of innovation, advance your technological landscape, and create a
            path to success. Our mantra is to Aspire and Create Your Future.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:w-1/2 w-full relative">
        <img src="/logos/acblack.png" className="md:w-2/3" alt="" />
      </div>
    </div>
  );
};
