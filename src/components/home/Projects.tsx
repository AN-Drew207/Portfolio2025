import Typewriter from "typewriter-effect";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Zoom } from "swiper";
import Link from "next/dist/client/link";
import { ProjectItem } from "@/components/projects/ProjectItem";

export const Projects = () => {
  const Projects = [
    {
      name: "Enders Gate Marketplace",
      link: "projects/web3/enders_gate_marketplace",
      image: "/img/eg_marketplace.png",
      description:
        "NFT marketplace where you can sell or buy any NFT related to Enders Gate",
    },
    {
      name: "Enders Gate Website",
      link: "projects/web3/enders_gate_website",
      image: "/img/eg_website.png",
      description:
        "Website where you can find EG roadmap, all the news about Enders Gate and all the functionalities related to their NFTs",
    },
    {
      name: "ShareEth",
      link: "projects/web3/share_eth",
      image: "/img/share_eth.png",
      description:
        "Social media app to allow content creators to monetize over their work using streams of income. (Hackathon Project made in ETHOnline 2022)",
    },

    {
      name: "NFT Bolster",
      link: "projects/web3/nft_bolster",
      image: "/img/bolster.png",
      description:
        "NFT Bolster is a platform where NFTs are backed by real assets in order to have a floor price in the market, this platform allow users to purchase NFTs backed by certificated assets in the market",
    },
    {
      name: "C3 Blockchain",
      link: "projects/web3/c3",
      image: "/img/c3.png",
      description:
        "C3 blockchain consists in a L2 blockchain base in the OP Stack with Goerli as L1, where we modified the core of the EVM where gas fees implementation is located.",
    },
  ];

  return (
    <div className="flex flex-col bg-[#1a1a1a] justify-center items-center w-full py-24 xl:px-36 md:px-10 sm:px-8 px-2 gap-16">
      <h2 className="flex text-center  md:text-4xl text-2xl titleLogo text-primary whitespace-nowrap">
        <span className="text-white font-bold pr-2">{"< "}</span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Projects")
              .pauseFor(8000)
              .deleteAll()
              .start();
            setInterval(() => {
              typewriter
                .typeString("Projects")
                .pauseFor(8000)
                .deleteAll()
                .start();
            }, 10000);
          }}
        />
        <span className="text-white font-bold">{" / >"}</span>
      </h2>
      <div className="lg:!w-2/3 w-full">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={10}
          modules={[Zoom, Autoplay]}
        >
          {Projects.map(({ name, link, image, description }) => {
            return (
              <SwiperSlide key={name}>
                <div className="px-1">
                  <ProjectItem
                    name={name}
                    link={link}
                    image={image}
                    description={description}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link href={"/projects"}>
        <div
          className={clsx(
            "text-center text-white md:text-xl text-sm font-[450] px-4 py-2 rounded-md border border-white cursor-pointer w-54",
            "hover:text-white hover:bg-[#000] hover:border-[#000] transition-all duration-500",
          )}
        >
          View More
        </div>
      </Link>
    </div>
  );
};
