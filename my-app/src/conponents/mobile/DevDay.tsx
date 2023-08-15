import React, { useRef, useEffect } from "react";

import useInView from "../useInView";
import classNames from "classnames";
import styles from "./Web.module.scss";
import Image from "next/image";
import js from "@/public/images/js.png";
import rea from "@/public/images/react.png";
import next from "@/public/images/next.png";
import dd3 from "@/public/images/dd3.png";
import dd4 from "@/public/images/dd4.png";
import dd5 from "@/public/images/dd5.png";

const DevDay: React.FC = () => {
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
        src="https://www.youtube.com/embed/xvINlpCsLYA?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7"
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
        <p className="text-[5vw] font-semibold">Project2. DevDay</p>
        <p className="text-[3vw]">
          개발자들의 좋은 습관 형성하기 위한 챌린지 서비스
        </p>
        <div className="text-[3vw] flex items-center my-4">
          <p className="mr-6 font-semibold">기술스택</p>
          <div className="flex">
            <Image src={js} alt="js" className="w-[5vw] h-[5vw] mr-3" />
            <Image src={rea} alt="react" className="w-[5vw] h-[5vw] mr-3" />
            <Image src={next} alt="next" className="w-[5vw] h-[5vw] mr-3" />
          </div>
        </div>
        <div className="text-[3vw] flex items-center mb-4">
          <p className="mr-6 font-semibold">개발기간</p>
          <p>2023.02.20~2023.04.07</p>
        </div>
        <div className="text-[3vw] flex items-center mb-4">
          <p className="mr-6 font-semibold">개발인원</p>
          <p>6명 (FE 3, BE 3)</p>
        </div>
        <div className="text-[3vw] items-center mb-4">
          <p className="mr-6 font-semibold">담당역할 / FrontEnd</p>
          <p>1. storybook을 이용하여 아토믹 디자인 기반 atom 컴포넌트 제작</p>
          <p>2. 챌린지 관련 페이지 제작</p>
        </div>
        <span className="flex w-full mb-4">
          <Image src={dd5} alt="dd5" className="w-1/3 p-[2vw]" />
          <Image src={dd4} alt="dd4" className="w-1/3 p-[2vw]" />
          <Image src={dd3} alt="dd3" className="w-1/3 p-[2vw]" />
        </span>
        <div className=" mb-4">
          <p className="text-[1.5vw] font-semibold">느끼고 배운 점</p>
          <div className="text-[1.2vw] break-keep	">
            1) 목업를 재사용을 생각하면서 만들었었는데 효율이 상당히 높았습니다.
            기획의 중요성을 알게 되었습니다.
            <br />
            2) FE끼리의 룰을 만들어서 정형화된 양식으로 만들었는데 처음에는 많이
            햇갈렸지만 적응을 하니 관리하기도 편했습니다.그리고 다른 팀원이 짠
            코드를 보기에도 편했습니다.
            <br />
            3) 목업만 보고 대충 개발하는 것보다 밑작업을 정성스럽게 한다면
            결과물이 좋게 나온다는 점을 깨달았습니다.
            <br />
            4) 지금까지한 프로젝트중 가장 만족스러운 결과물이었고 배운점이
            상당히 많았습니다.. JIRA를 이용하여 역할을 세분화하여 진행도 체크를
            정확하게 하여 효율적인 일정 관리를 하였습니다. 그 결과 목표한
            결과물을 계획대로 구현 가능했습니다.
            <br />
            5) 매일 스크럼 회의를 하여 전날의 데일리 회고를 지속적으로 하여
            문제를 바로바로 인식, 해결하였습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevDay;
