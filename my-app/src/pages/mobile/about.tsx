import React from "react";
import Image from "next/image";
import me from "@/public/images/me1.png";
import react from "@/public/images/react.png";
import vue from "@/public/images/vue.png";
import js from "@/public/images/js.png";
import ts from "@/public/images/ts.png";
import css from "@/public/images/css.png";
import python from "@/public/images/python.png";
import StarRating from "@/src/conponents/starRating";
import Footer from "@/src/conponents/mobile/naviBar";

const About: React.FC = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="p-8 pb-16">
        <Image src={me} alt="me" className="rounded-full mb-4 w-1/2 m-auto" />
        <div className="animate__animated animate__fadeIn">
          <p className="text-[8vw] font-bold">최형운</p>
          <p className="text-[5vw]">Choi HyoingWoon</p>
          <div className="text-[4vw] mt-4  p-4 rounded-xl border-2">
            <div className="">
              <p className="w-[10rem] font-semibold">생년월일</p>
              <p>1998.01.04</p>
            </div>
            <div className=" mt-2">
              <p className="w-[10rem] font-semibold">학교/전공</p>
              <div>
                <p>전북대학교 산업정보시스템공학과</p>
              </div>
            </div>
            <div className=" mt-2">
              <p className="w-[10rem] font-semibold">연락처</p>
              <p>010-2505-8096</p>
            </div>
            <div className=" mt-2">
              <p className="w-[10rem] font-semibold">이메일</p>
              <p>cpobo@hanmail.net</p>
            </div>
            <div className="mt-2">
              <p className="w-[10rem] font-semibold">GitHub</p>
              <p>https://github.com/choihyoingwoon</p>
            </div>
          </div>
          <div className="mt-8 text-[4vw] border-l-8 0 p-2">
            <p className="font-bold text-[#758772]">교육</p>
            <p className="mt-2 border-dashed border-b-4 pb-2">
              삼성 청년 SW 아카데미 8기
              <span className="text-[3.5vw]">(2022.07~2023.06)</span>
            </p>
          </div>
          <div className="mt-8 text-[4vw] border-l-8 p-2">
            <p className="font-bold text-[#758772]">수상</p>
            <div className="my-2">
              <p>2023.05</p>
              <p className="text-[3.5vw]">
                삼성 청년 SW 아카데미 자율프로젝트 우수상
              </p>
            </div>
            <div className="my-2">
              <p>2022.11</p>
              <p className="text-[3.5vw]">
                삼성 청년 SW 아카데미 1학기 관통프로젝트 우수상
              </p>
            </div>
            <div className="mt-2 border-dashed border-b-4 pb-2">
              <p>2020.12</p>
              <p className="text-[3.5vw]">
                2020년 2학기 전북대 캡스톤 디자인 은상
              </p>
            </div>
          </div>
        </div>
        <div className="w-fit p-2 mt-8 border-l-8 animate__animated animate__fadeIn">
          <p className="text-[4vw] font-bold text-[#758772]">프로그래밍 역량</p>
          <div className="my-2">
            <div className="flex text-[4vw] items-center">
              <div className="w-[6vw]">
                <Image src={react} alt="react" width={36} height={36} />
              </div>
              <p className="px-4">React</p>
              <StarRating rating={3} />
            </div>
            <div className="text-gray-500 py-2 text-[3vw]">
              <p>JS, TS 기반 운영/기능 업데이트 및 개발 가능</p>
              <p>프로젝트 및 서비스 개발 경험 보유</p>
            </div>
          </div>
          <div className="my-2">
            <div className="flex text-[4vw] items-center">
              <div className="w-[6vw]">
                <Image src={js} alt="react" width={36} height={36} />
              </div>
              <p className="px-4">JavaScript</p>
              <StarRating rating={3} />
            </div>
            <div className="text-gray-500 py-2 text-[3vw]">
              <p>ES6+를 이해하고 이를 활용해 소규모 프로젝트 진행</p>
              <p>JS기반 프레임워크와 라이브러리 사용가능</p>
            </div>
          </div>
          <div className="my-2">
            <div className="flex text-[4vw] items-center">
              <div className="w-[6vw]">
                <Image src={ts} alt="react" width={36} height={36} />
              </div>
              <p className="px-4">TypeScript</p>
              <StarRating rating={2} />
            </div>
            <div className="text-gray-500 py-2 text-[3vw]">
              <p>구조 이해를 통한 서비스 기능 구현, 모듈 응용 가능</p>
              <p>서비스 환경에 맞는 최적화 코드 구현</p>
            </div>
          </div>
          <div className="my-2">
            <div className="flex text-[4vw] items-center">
              <div className="w-[6vw]">
                <Image src={css} alt="react" width={36} height={36} />
              </div>
              <p className="px-4">HTML/CSS</p>
              <StarRating rating={3.5} />
            </div>
            <div className="text-gray-500 py-2 text-[3vw]">
              <p>웹 표준과 접근성 준수</p>
              <p>반응형 웹 디자인 개발 경험 보유</p>
            </div>
          </div>
          <div className="my-2">
            <div className="flex text-[4vw] items-center">
              <div className="w-[6vw]">
                <Image src={vue} alt="react" width={36} height={36} />
              </div>
              <p className="px-4">Vue.js</p>
              <StarRating rating={3} />
            </div>
            <div className="text-gray-500 py-2 text-[3vw]">
              <p>Vuex, vue-router를 이용한 서비스 개발 가능</p>
              <p>프로젝트 및 서비스 개발 경험 보유</p>
            </div>
          </div>
          <div className="my-2 border-dashed border-b-4 pb-2">
            <div className="flex text-[4vw] items-center">
              <div className="w-[6vw]">
                <Image src={python} alt="react" width={36} height={36} />
              </div>
              <p className="px-4">Python</p>
              <StarRating rating={2} />
            </div>
            <div className="text-gray-500 py-2 text-[3vw]">
              <p>알고리즘 구조 이해를 통한 기본 기능 구현</p>
              <p>코드 분석 및 이슈 디버깅 가능</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
