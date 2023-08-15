import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import SeeYouAgain from "@/src/conponents/SeeYouAgain";
import DevDay from "@/src/conponents/DevDay";
import SingSingTime from "@/src/conponents/SingSingTime";
import PJT from "@/src/conponents/PJT";
import classNames from "classnames";

const Detail: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = sessionStorage.getItem("see");
      if (storedValue !== null) {
        setNumber(parseInt(storedValue, 10));
      }
    }
  }, []);
  const [number, setNumber] = useState<number>(0);
  const list: Record<string, number> = {
    SeeYouAgain: 0,
    DevDay: 1,
    SingSingTime: 2,
    PJT: 3,
  };
  const handleSlideChange = (info: { currentIndex: number }) => {
    setNumber(info.currentIndex);
    sessionStorage.setItem("see", String(info.currentIndex));
  };
  const projectClick = (project: number) => {
    console.log(project);
    sessionStorage.setItem("see", String(project));
    setNumber(project);
  };

  return (
    <div className="w-full text-black">
      <div className="flex text-[1.5vw] bg-[#2f2f2f] text-white text-center px-8 h-fit pt-8">
        <button
          onClick={() => projectClick(0)}
          className={classNames(
            "w-1/4",
            number == 0 ? "text-[#5be9b9] font-semibold" : "text-white"
          )}
        >
          SeeYouAgain
        </button>
        <button
          onClick={() => projectClick(1)}
          className={classNames(
            "w-1/4",
            number == 1 ? "text-[#5be9b9] font-semibold" : "text-white"
          )}
        >
          DevDay
        </button>
        <button
          onClick={() => projectClick(2)}
          className={classNames(
            "w-1/4",
            number == 2 ? "text-[#5be9b9] font-semibold" : "text-white"
          )}
        >
          SingSingTime
        </button>
        <button
          onClick={() => projectClick(3)}
          className={classNames(
            "w-1/4",
            number == 3 ? "text-[#5be9b9] font-semibold" : "text-white"
          )}
        >
          SSAFY 관통프로젝트
        </button>
      </div>
      <AwesomeSlider
        className="h-[85vh]"
        selected={number}
        onTransitionEnd={handleSlideChange}
      >
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
