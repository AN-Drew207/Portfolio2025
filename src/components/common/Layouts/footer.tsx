import React from "react";
import Typewriter from "typewriter-effect";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 w-full relative">
      <div className="flex md:flex-row flex-col items-center justify-between gap-4 sm:px-16 px-8 w-full">
        <h2 className="text-center sm:text-xl text-md font-[450]">
          {"< "}Connect with{" "}
          <span className="text-[#a61816] !text-[21px] !font-[600]"> us</span>
          {" />"}
        </h2>
        <div className="space-x-4">
          <a
            href="https://twitter.com/andcont207"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-2xl text-xl hover:text-primary transition-all duration-500"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/ac-it-company"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-2xl text-xl hover:text-primary transition-all duration-500"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/AN-Drew207"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-2xl text-xl hover:text-primary transition-all duration-500"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
