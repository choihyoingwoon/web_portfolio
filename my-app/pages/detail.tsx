import React from "react";
import AwesomeSlider from "react-awesome-slider";
import SeeYouAgain from "./conponents/SeeYouAgain";
import DevDay from "./conponents/DevDay";
import SingSingTime from "./conponents/SingSingTime";
import PJT from "./conponents/PJT";

const Detail: React.FC = () => {
  return (
    <div className="w-full">
      <AwesomeSlider className="h-[95vh] ">
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
