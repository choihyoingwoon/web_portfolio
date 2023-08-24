import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import SeeYouAgain from "./conponents/SeeYouAgain";
import DevDay from "./conponents/DevDay";
import SingSingTime from "./conponents/SingSingTime";
import PJT from "./conponents/PJT";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { BiArrowBack } from "react-icons/bi";


const Detail: React.FC = () => {
  const router = useRouter();
  const [number, setNumber] = useState<number>(
    typeof window !== "undefined"
      ? parseInt(sessionStorage.getItem("see") || "0")
      : 0
  );
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
  const goToBack = () => {
    router.push("/contents");
  };

  return (
    <div className="relative w-full text-black font-['Pretendard-Regular']">
      <div
        onClick={() => goToBack()}
        className="absolute left-10 top-[3vh] flex items-center text-[1vw] cursor-pointer text-white"
      >
        <BiArrowBack size={30} />
        <p className="ml-2">back</p>
      </div>
      <div className="flex text-[1.2vw] bg-[#2f2f2f] text-white text-center px-8 h-[10vh] py-2">
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
        <div className="w-[80%] h-full pb-4">
          <SeeYouAgain />
        </div>
        <div className="w-[80%] h-full pb-4">
          <DevDay />
        </div>
        <div className="w-[80%] h-full pb-4">
          <SingSingTime />
        </div>
        <div className="w-[80%] h-full pb-4">
          <PJT />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Detail;
