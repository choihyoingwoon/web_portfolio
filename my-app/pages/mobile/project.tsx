import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import seeyouagain from "@/public/images/seeyouagain.png";
import devday from "@/public/images/devday.png";
import singsingtime from "@/public/images/singsingtime.png";
import pjt from "@/public/images/pjt.png";

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};
const dropVariants = {
  initial: { opacity: 0.5, y: -1000 },
  animate: { opacity: 1, y: 0 },
};

const Project: React.FC = () => {
  const router = useRouter();

  const goToBack = () => {
    router.back();
  };

  // 설명을 관리하는 state
  const [showDescription, setShowDescription] = useState<string | null>(null);

  const handleMouseEnter = (imageName: string) => {
    setShowDescription(imageName);
  };

  const handleMouseLeave = () => {
    setShowDescription(null);
  };
  const goToDetail = () => {
    const list: Record<string, number> = {
      SeeYouAgain: 0,
      DevDay: 1,
      SingSingTime: 2,
      PJT: 3,
    };
    if (showDescription) {
      sessionStorage.setItem("see", String(list[showDescription]));
      router.push("/detail");
    }
  };
  return (
    <div className="w-full h-screen bg-[#7510F7] text-black">
      <motion.button
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1 }}
        className="absolute left-10 top-[3vh] flex items-center text-[1vw] text-white font-bold"
        onClick={goToBack}
      >
        <BiArrowBack size={30} />
        <p className="ml-2">back</p>
      </motion.button>
      <motion.p
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1 }}
        className="text-[3vw] text-white text-center pt-16 font-semibold"
      >
        My Project List
      </motion.p>
      <div className="grid grid-cols-2 gap-8 w-fit m-auto mt-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={dropVariants}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative rounded-xl w-[25vw] h-[30vh] cursor-pointer"
          onMouseEnter={() => handleMouseEnter("SeeYouAgain")}
          onMouseLeave={handleMouseLeave}
          onClick={goToDetail}
        >
          <Image
            src={seeyouagain}
            alt="seeyouagain"
            layout="fill"
            className="rounded-xl"
          />
          {/* 이미지에 마우스를 올렸을 때 설명을 표시하는 컴포넌트 */}
          {showDescription === "SeeYouAgain" && (
            <motion.div
              initial={{ y: 0, filter: "blur(3px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255,0.9)" }}
              transition={{ duration: 0.2 }}
              className=" bottom-0 w-[25vw] h-[30vh] rounded-xl border-2 p-8"
            >
              <p className="font-bold text-[2vw]">SeeYouAgain</p>
              <p className="text-[1vw] font-semibold break-keep">
                경찰서, CCTV, 가로등 데이터를 기반으로 안전 거래 장소를
                추천해주는 물품 대여 서비스
              </p>
              <button className="absolute bottom-[10%] left-[35%] rounded-xl w-1/3 h-[20%] text-[1vw] font-semibold bg-white shadow-2xl">
                자세히 보기
              </button>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={dropVariants}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative rounded-xl w-[25vw] h-[30vh] cursor-pointer"
          onMouseEnter={() => handleMouseEnter("DevDay")}
          onMouseLeave={handleMouseLeave}
          onClick={goToDetail}
        >
          <Image
            src={devday}
            alt="devday"
            layout="fill"
            className="rounded-xl"
          />
          {/* 이미지에 마우스를 올렸을 때 설명을 표시하는 컴포넌트 */}
          {showDescription === "DevDay" && (
            <motion.div
              initial={{ y: 0, filter: "blur(3px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255,0.9)" }}
              transition={{ duration: 0.2 }}
              className=" bottom-0 bg-white w-[25vw] h-[30vh] rounded-xl border-2 p-8"
            >
              <p className="font-bold text-[2vw]">DevDay</p>
              <p className="text-[1vw] font-semibold break-keep">
                개발자들이 좋은 습관을 형성할 수 있도록 도와주는 챌린지 서비스
              </p>
              <button className="absolute bottom-[10%] left-[35%] rounded-xl w-1/3 h-[20%] text-[1vw] font-semibold bg-white shadow-2xl">
                자세히 보기
              </button>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={dropVariants}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative rounded-xl w-[25vw] h-[30vh] cursor-pointer"
          onMouseEnter={() => handleMouseEnter("SingSingTime")}
          onMouseLeave={handleMouseLeave}
          onClick={goToDetail}
        >
          <Image
            src={singsingtime}
            alt="singsingtime"
            layout="fill"
            className="rounded-xl"
          />
          {/* 이미지에 마우스를 올렸을 때 설명을 표시하는 컴포넌트 */}
          {showDescription === "SingSingTime" && (
            <motion.div
              initial={{ y: 0, filter: "blur(3px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255,0.9)" }}
              transition={{ duration: 0.2 }}
              className=" bottom-0 w-[25vw] h-[30vh] rounded-xl border-2 p-8"
            >
              <p className="font-bold text-[2vw]">SingSingTime</p>
              <p className="text-[1vw] font-semibold break-keep">
                WebRTC를 이용한 온라인 노래 경연 프로그램입니다.
              </p>
              <button className="absolute bottom-[10%] left-[35%] rounded-xl w-1/3 h-[20%] text-[1vw] font-semibold bg-white shadow-2xl">
                자세히 보기
              </button>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={dropVariants}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative rounded-xl w-[25vw] h-[30vh] cursor-pointer"
          onMouseEnter={() => handleMouseEnter("PJT")}
          onMouseLeave={handleMouseLeave}
          onClick={goToDetail}
        >
          <Image src={pjt} alt="pjt" layout="fill" className="rounded-xl" />
          {/* 이미지에 마우스를 올렸을 때 설명을 표시하는 컴포넌트 */}
          {showDescription === "PJT" && (
            <motion.div
              initial={{ y: 0, filter: "blur(3px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255,0.9)" }}
              transition={{ duration: 0.2 }}
              className=" bottom-0 w-[25vw] h-[30vh] rounded-xl border-2 p-8"
            >
              <p className="font-bold text-[2vw]">SSAFY 관통 프로젝트</p>
              <p className="text-[1vw] font-semibold break-keep">
                OpenApi를 활용해서 영화추천서비스를 제공하는 프로젝트입니다.
              </p>
              <button className="absolute bottom-[10%] left-[35%] rounded-xl w-1/3 h-[20%] text-[1vw] font-semibold bg-white shadow-2xl">
                자세히 보기
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
