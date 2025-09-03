import * as React from "react";
import { keyframes } from "@emotion/react";

import { MainScreen } from "@/components/home/MainScreen";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";

export const customAnimation = keyframes`
  from {
	
	opacity:1;
    width: 0%;
  }

  to {
		opacity:1;
    width: 100%;
  }
`;

export const gapAnimation = keyframes`
  from {
	
    gap: 0%;
  }

  to {
    gap: 8px;
  }
`;

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full bg-overlay relative overflow-hidden">
      <MainScreen />
      <About />
      <Projects />
    </div>
  );
};
export default Home;
