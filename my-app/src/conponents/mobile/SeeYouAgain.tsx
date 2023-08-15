import React, { useRef, useEffect } from "react";

import useInView from "../useInView";
import classNames from "classnames";
import styles from "./Web.module.scss";
import Image from "next/image";
import ts from "@/public/images/ts.png";
import rea from "@/public/images/react.png";
import next from "@/public/images/next.png";
import pwa from "@/public/images/pwa.png";
import sya1 from "@/public/images/sya1.png";
import sya2 from "@/public/images/sya2.png";
import sya3 from "@/public/images/sya3.png";

const SeeYouAgain: React.FC = () => {
  const [ref, isInView] = useInView(0.9);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    if (iframeRef.current) {
      if (isInView) {
        // If the iframe is in view, play the video
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      } else {
        // If the iframe is out of view, pause the video
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    }
  }, [isInView]);
  return (
    <div className=" h-full overflow-scroll bg-white overflow-x-hidden over">
      <iframe
        src="https://www.youtube.com/embed/QRYlVUjQ0Xk?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7"
        className={classNames(
          "w-full m-auto mb-4",
          styles.fadeUp,
          isInView ? styles.fadeUpVisible : styles.fadeUp
        )}
        width={150}
        height={200}
        ref={(el) => {
          iframeRef.current = el;
          ref(el);
        }}
      />
      <div className="bg-white w-[90%] m-auto pb-4 ">
        <p className="text-[5vw] font-semibold">Project1. SeeYouAgain</p>
        <p className="text-[3vw]">
          안전한 세이프존에서 동네 이웃끼리 편하고 안전하게 거래 할 수 있는 대여
          서비스 플랫폼
        </p>
        <div className="text-[3vw] flex items-center my-4">
          <p className="mr-6 font-semibold">기술스택</p>
          <div className="flex">
            <Image src={ts} alt="ts" className="w-[5vw] h-[5vw] mr-3" />
            <Image src={rea} alt="react" className="w-[5vw] h-[5vw] mr-3" />
            <Image src={next} alt="next" className="w-[5vw] h-[5vw] mr-3" />
            <Image src={pwa} alt="pwa" className=" h-[5vw]" />
          </div>
        </div>
        <div className="text-[3vw] flex items-center mb-4">
          <p className="mr-6 font-semibold">개발기간</p>
          <p>2023.04.10~2023.05.19</p>
        </div>
        <div className="text-[3vw] flex items-center mb-4">
          <p className="mr-6 font-semibold">개발인원</p>
          <p>6명 (FE 3, BE 3)</p>
        </div>
        <div className="text-[3vw] items-center mb-4">
          <p className="mr-6 font-semibold">담당역할 / FrontEnd</p>
          <p>1. Fade-In 애니메이션을 활용한 메인페이지 제작</p>
          <p>2. 경찰서, CCTV, 가로등 위치를 기반으로 안전점수 계산</p>
          <p>3. 카카오 맵 위에 안전점수 표시(사각형, 색상) 페이지 제작</p>
          <p>4. 유저들끼리 실시간 위치 확인 페이지 제작</p>
        </div>
        <span className="flex w-full mb-4">
          <Image src={sya1} alt="sya1" className="w-1/3 p-[2vw]" />
          <Image src={sya2} alt="sya2" className="w-1/3 p-[2vw]" />
          <Image src={sya3} alt="sya3" className="w-1/3 p-[2vw]" />
        </span>
        <div className=" mb-4">
          <p className="text-[1.5vw] font-semibold">느끼고 배운 점</p>
          <div className="text-[3vw] break-keep	">
            1) 계획의 중요성을 알게 되었습니다. 주어진 기간에 맞게 계획을 잘
            세우고 일정 관리를 잘 해야 결과물이 안정적으로 나온다고 느꼈습니다.
            <br />
            2) 웹과 앱을 모두 만들면서 반응형의 중요성을 다시 한번 생각하게
            되었습니다.
            <br />
            3) 데이터를 사용해야 될 때 페이지의 쾌적함을 위해 좀 더 빠르게
            처리하여 띄울 방법을 고민하며 코드를 짜야 한다고 느꼈습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeYouAgain;
