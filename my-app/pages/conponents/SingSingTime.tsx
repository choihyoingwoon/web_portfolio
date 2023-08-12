import React, { useRef, useEffect } from "react";

import useInView from "./useInView";
import classNames from "classnames";
import styles from "./Web.module.scss";
import Image from "next/image";
import singsingtime from "../../public/images/singsingtime.png";
import js from "../../public/images/js.png";
import vue from "../../public/images/vue.png";
import dd1 from "../../public/images/dd1.png";
import dd2 from "../../public/images/dd2.png";
import dd3 from "../../public/images/dd3.png";
import dd4 from "../../public/images/dd4.png";
import dd5 from "../../public/images/dd5.png";

const SingSingTime: React.FC = () => {
  const [ref, isInView] = useInView(0.8);
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
    <>
      <div
        className={classNames(
          isInView ? "bg-black" : "bg-white",
          "bg-black h-full overflow-scroll overflow-x-hidden over"
        )}
      >
        <iframe
          src="https://www.youtube.com/embed/FptdSMkUkKE?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=3"
          className={classNames(
            "w-full h-full m-auto mb-4",
            styles.fadeUp,
            isInView ? styles.fadeUpVisible : styles.fadeUp
          )}
          ref={(el) => {
            iframeRef.current = el;
            ref(el);
          }}
        />
        <div className="bg-white w-[80%] m-auto pb-16">
          <Image
            src={singsingtime}
            alt="singsingtime"
            className="w-full mb-8 "
          />
          <div>
            <p className="text-[2vw] font-semibold">Project3. SingSingTime</p>
            <p>비대면 노래 경연 서비스</p>
            <br />
            <p className="text-[1.2vw] mb-6 font-semibold">
              코로나로 인하여 노래방을 자주 갈 수 없는 끼가 많은 사람들을 위한
              WebRTC를 이용한 비대면 노래 경연 서비스입니다. 화상화면으로
              노래부르는 사람의 모습을 볼 수 있어 온라인의 거리감을
              좁혀주었습니다.
            </p>
            <div className="text-[1.2vw] flex items-center mb-6">
              <p className="mr-6 font-semibold">기술스택</p>
              <div className="flex">
                <Image src={js} alt="js" className="w-[1.3vw] h-[1.3vw] mr-3" />
                <Image
                  src={vue}
                  alt="vue"
                  className="w-[1.3vw] h-[1.3vw] mr-3"
                />
              </div>
            </div>
            <div className="text-[1.2vw] flex items-center mb-6">
              <p className="mr-6 font-semibold">개발기간</p>
              <p>2023.01.09~2023.02.17</p>
            </div>
            <div className="text-[1.2vw] flex items-center mb-6">
              <p className="mr-6 font-semibold">개발인원</p>
              <p>6명 (FE 3, BE 3)</p>
            </div>
            <div className="text-[1.2vw] items-center mb-6">
              <p className="mr-6 font-semibold">담당역할 / FrontEnd</p>
              <p>1. 서비스의 전체적인 페이지 구조 구성, 기초 구현</p>
              <p>2. 노래 플레이 룸 구현</p>
            </div>
            <p className="text-[1.2vw] font-semibold">느끼고 배운 점</p>
            <div className="text-[1.2vw] break-keep	">
              1. session 통신을 이용해 해당 페이지를 보고 있는 사용자에게 동일한
              작동을 요청 보내는 것을 알게 되었습니다.
              <br />
              2. openvidu를 공부하는 기간이 너무 길었기 때문에 싱크 문제같은
              디테일한 점을 해결하지 못하였습니다. 또한 FE끼리의 룰을 정하지
              않아 코드가 중구난방인점이 아쉬웠습니다.
              <br />
              3. 계속 구현도를 체크하면서 일정을 조율하는 것의 중요성을 알게
              되었습니다.
              <br />
              4. 전체적인 UX/UI의 구상을 맡으면서 일관성있는 디자인의 중요성을
              알게 되었으며 컴포넌트의 재사용성을 생각하면서 목업를
              만들어야한다는 점을 알게 되었습니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingSingTime;
