import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import seeyouagain from "@/public/images/seeyouagain.png";
import devday from "@/public/images/devday.png";
import singsingtime from "@/public/images/singsingtime.png";
import pjt from "@/public/images/pjt.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/src/conponents/mobile/naviBar";
import { useRouter } from "next/router";

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Project: React.FC = () => {
  const router = useRouter();
  const goToDetail = (project: Number) => {
    sessionStorage.setItem("see", String(project));
    router.push("/mobile/detail");
  };
  return (
    <div className="relative w-full h-screen bg-[#7510F7] text-black">
      <motion.p
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1 }}
        className="text-[8vw] text-white text-center pt-16 font-semibold"
      >
        My Project List
      </motion.p>
      <motion.p
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full text-center text-[4vw] text-white"
      >
        클릭해서 프로젝트 상세보기
      </motion.p>
      <div className="w-full p-8 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Slider {...settings}>
          <div className="p-2" onClick={() => goToDetail(0)}>
            <div className="relative w-full p-4 bg-white h-fit rounded-xl">
              <Image
                src={seeyouagain}
                alt="seeyouagain"
                className="rounded-xl"
              />
              <div className="m-2 mb-0">
                <p className="font-bold text-[6vw] ">SeeYouAgain</p>
                <p>2023.04.10 ~ 2023.05.19</p>
                <p className="text-[3vw] font-semibold break-keep">
                  경찰서, CCTV, 가로등 데이터를 기반으로 안전 거래 장소를
                  추천해주는 물품 대여 서비스
                </p>
              </div>
              {/*              <button className="absolute -translate-x-1/2 left-1/2 bottom-4 rounded-lg w-2/3 m-auto h-8 text-[4vw] font-semibold shadow-md shadow-[#7510F7]/80">
                자세히 보기
  </button>*/}
            </div>
          </div>
          <div className="p-2" onClick={() => goToDetail(1)}>
            <div className="relative w-full p-4 bg-white h-fit rounded-xl">
              <Image src={devday} alt="devday" className="rounded-xl" />
              <div className="m-2 mb-0">
                <p className="font-bold text-[6vw]">DevDay</p>
                <p>2023.02.27 ~ 2023.04.07</p>
                <p className="text-[3vw] font-semibold break-keep">
                  개발자들이 좋은 습관을 형성할 수 있도록 도와주는 챌린지 서비스
                </p>
              </div>
              {/*              <button className="absolute -translate-x-1/2 left-1/2 bottom-4 rounded-lg w-2/3 m-auto h-8 text-[4vw] font-semibold shadow-md shadow-[#7510F7]/80">
                자세히 보기
  </button>*/}
            </div>
          </div>
          <div className="p-2" onClick={() => goToDetail(2)}>
            <div className="relative w-full p-4 bg-white h-fit rounded-xl">
              <Image
                src={singsingtime}
                alt="singsingtime"
                className="rounded-xl"
              />
              <div className="m-2 mb-0">
                <p className="font-bold text-[6vw]">SingSingTime</p>
                <p>2023.01.09 ~ 2023.02.17</p>
                <p className="text-[3vw] font-semibold break-keep">
                  WebRTC를 이용한 온라인 노래 경연 프로그램 입니다.
                </p>
              </div>
              {/*              <button className="absolute -translate-x-1/2 left-1/2 bottom-4 rounded-lg w-2/3 m-auto h-8 text-[4vw] font-semibold shadow-md shadow-[#7510F7]/80">
                자세히 보기
  </button>*/}
            </div>
          </div>
          <div className="p-2" onClick={() => goToDetail(3)}>
            <div className="relative w-full p-4 bg-white h-fit rounded-xl">
              <Image src={pjt} alt="pjt" className="rounded-xl" />
              <div className="m-2 mb-0">
                <p className="font-bold text-[6vw]">SSAFY 관통 프로젝트</p>
                <p>2022.11.16 ~ 2022.11.25</p>
                <p className="text-[3vw] font-semibold break-keep">
                  OpenApi를 활용해서 영화추천서비스를 제공하는 프로젝트 입니다.
                </p>
              </div>
              {/*              <button className="absolute -translate-x-1/2 left-1/2 bottom-4 rounded-lg w-2/3 m-auto h-8 text-[4vw] font-semibold shadow-md shadow-[#7510F7]/80">
                자세히 보기
  </button>*/}
            </div>
          </div>
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
