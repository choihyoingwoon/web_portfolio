import React from "react";
import AwesomeSlider from "react-awesome-slider";
import SeeYouAgain from "./conponents/SeeYouAgain";
import DevDay from "./conponents/DevDay";
import SingSingTime from "./conponents/SingSingTime";
import PJT from "./conponents/PJT";

const Detail: React.FC = () => {
  return (
    <div className="w-full ">
      <div className="flex text-[1.5vw] bg-[#2f2f2f] text-white text-center px-8 h-fit pt-8">
        <p className="w-1/4">SeeYouAgain</p>
        <p className="w-1/4">DevDay</p>
        <p className="w-1/4">SingSingTime</p>
        <p className="w-1/4">SSAFY 관통프로젝트</p>
      </div>
      <AwesomeSlider className="h-[85vh] ">
        <div className="w-[80%] h-full py-8">
          <SeeYouAgain />
        </div>
        <div className="w-[80%] h-full py-8">
          <DevDay />
        </div>
        <div className="w-[80%] h-full py-8">
          <SingSingTime />
        </div>
        <div className="w-[80%] h-full py-8">
          <PJT />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Detail;
