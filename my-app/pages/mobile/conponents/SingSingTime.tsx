import React, { useRef, useEffect } from "react";

import useInView from "./useInView";
import classNames from "classnames";
import styles from "./Web.module.scss";
import Image from "next/image";
import js from "../../../public/images/js.png";
import vue from "../../../public/images/vue.png";

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
    <div className=" h-full overflow-scroll bg-white overflow-x-hidden over">
      <iframe
        src="https://www.youtube.com/embed/FptdSMkUkKE?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=3"
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
        <p className="text-[5vw] font-semibold">Project3. SingSingTime</p>
        <p className="text-[3vw]">비대면 노래 경연 서비스</p>
        <div className="text-[3vw] flex items-center my-4">
          <p className="mr-6 font-semibold">기술스택</p>
          <div className="flex">
            <Image src={js} alt="js" className="w-[5vw] h-[5vw] mr-3" />
            <Image src={vue} alt="vue" className="w-[5vw] h-[5vw] mr-3" />
          </div>
        </div>
        <div className="text-[3vw] flex items-center mb-4">
          <p className="mr-6 font-semibold">개발기간</p>
          <p>2023.01.09~2023.02.17</p>
        </div>
        <div className="text-[3vw] flex items-center mb-4">
          <p className="mr-6 font-semibold">개발인원</p>
          <p>6명 (FE 3, BE 3)</p>
        </div>
        <div className="text-[3vw] items-center mb-4">
          <p className="mr-6 font-semibold">담당역할 / FrontEnd</p>
          <p>1. 서비스의 전체적인 페이지 구조 구성, 기초 구현</p>
          <p>2. 노래 플레이 룸 구현</p>
        </div>
        <div className=" mb-4">
          <p className="text-[3vw] font-semibold">느끼고 배운 점</p>
          <div className="text-[3vw] break-keep	">
            1. session 통신을 이용해 해당 페이지를 보고 있는 사용자에게 동일한
            작동을 요청 보내는 것을 알게 되었습니다.
            <br />
            2. openvidu를 공부하는 기간이 너무 길었기 때문에 싱크 문제같은
            디테일한 점을 해결하지 못하였습니다. 또한 FE끼리의 룰을 정하지 않아
            코드가 중구난방인점이 아쉬웠습니다.
            <br />
            3. 계속 구현도를 체크하면서 일정을 조율하는 것의 중요성을 알게
            되었습니다.
            <br />
            4. 전체적인 UX/UI의 구상을 맡으면서 일관성있는 디자인의 중요성을
            알게 되었으며 컴포넌트의 재사용성을 생각하면서 목업를 만들어야한다는
            점을 알게 되었습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingSingTime;
