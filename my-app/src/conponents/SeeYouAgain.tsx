import React, { useRef, useEffect } from "react";

import useInView from "./useInView";
import classNames from "classnames";
import styles from "./Web.module.scss";
import Image from "next/image";
import seeyouagain from "@/public/images/seeyouagain.png";
import ts from "@/public/images/ts.png";
import rea from "@/public/images/react.png";
import next from "@/public/images/next.png";
import pwa from "@/public/images/pwa.png";
import sya1 from "@/public/images/sya1.png";
import sya2 from "@/public/images/sya2.png";
import sya3 from "@/public/images/sya3.png";
import sya4 from "@/public/images/sya4.png";
import sya5 from "@/public/images/sya5.png";

const SeeYouAgain: React.FC = () => {
  const code = `
    // useInView.ts 파일 내용
    import React, { useCallback, useState, useRef } from "react";

    export default function useInView(
      threshold: number
    ): [React.RefCallback<HTMLElement>, boolean] {
      const [isInView, setIsInView] = useState(false);
      const ref = useRef<IntersectionObserver | null>(null);

      const setRef = useCallback((node: HTMLElement | null) => {
        if (ref.current) {
          ref.current.disconnect();
        }
        if (node) {
          ref.current = new IntersectionObserver(
            ([entry]) => {
              setIsInView(entry.isIntersecting);
            },
            { threshold, }
          );
          if (ref.current) {
            ref.current.observe(node);
          }
        }
      }, []);

      return [setRef, isInView];
    }
  `;
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
          src="https://www.youtube.com/embed/QRYlVUjQ0Xk?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7"
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
          <Image src={seeyouagain} alt="seeyouagain" className="w-full mb-8 " />
          <div>
            <p className="text-[2vw] font-semibold">Project1. SeeYouAgain</p>
            <p>
              안전한 세이프존에서 동네 이웃끼리 편하고 안전하게 거래 할 수 있는
              대여 서비스 플랫폼
            </p>
            <br />
            <p className="text-[1.2vw] mb-6 font-semibold">
              중고거래와 렌탈 시장이 성장하는 가운데, 대면 거래의 불안요소인
              안전에 집중하여 안전한 거래장소를 추천하고 실시간 위치정보를 통해
              이용자 간 편한 거래를 돕는 동네 대여 서비스 플랫폼
            </p>
            <div className="text-[1.2vw] flex items-center mb-6">
              <p className="mr-6 font-semibold">기술스택</p>
              <div className="flex">
                <Image src={ts} alt="ts" className="w-[1.3vw] h-[1.3vw] mr-3" />
                <Image
                  src={rea}
                  alt="react"
                  className="w-[1.3vw] h-[1.3vw] mr-3"
                />
                <Image
                  src={next}
                  alt="next"
                  className="w-[1.3vw] h-[1.3vw] mr-3"
                />
                <Image src={pwa} alt="pwa" className=" h-[1.3vw]" />
              </div>
            </div>
            <div className="text-[1.2vw] flex items-center mb-6">
              <p className="mr-6 font-semibold">개발기간</p>
              <p>2023.04.10~2023.05.19</p>
            </div>
            <div className="text-[1.2vw] flex items-center mb-6">
              <p className="mr-6 font-semibold">개발인원</p>
              <p>6명 (FE 3, BE 3)</p>
            </div>
            <div className="text-[1.2vw] items-center mb-6">
              <p className="mr-6 font-semibold">담당역할 / FrontEnd</p>
              <p>1. Fade-In 애니메이션을 활용한 메인페이지 제작</p>
              <p>2. 경찰서, CCTV, 가로등 위치를 기반으로 안전점수 계산</p>
              <p>3. 카카오 맵 위에 안전점수 표시(사각형, 색상) 페이지 제작</p>
              <p>4. 유저들끼리 실시간 위치 확인 페이지 제작</p>
            </div>
            <span className="flex w-full mb-6">
              <Image src={sya1} alt="sya1" className="w-1/3 p-[2vw]" />
              <Image src={sya2} alt="sya2" className="w-1/3 p-[2vw]" />
              <Image src={sya3} alt="sya3" className="w-1/3 p-[2vw]" />
            </span>
          </div>
          <div className="px-12">
            <div className=" mb-12">
              <p className="text-[1.5vw] font-semibold">1. 메인 페이지</p>
              <div className="text-[1.2vw] break-keep	">
                IntersectionObserver를 이용하여 요소가 뷰포트에 포함여부를 판별,
                포함여부에 따라 opacity, transform, transition 속성을 이용하여
                fade in, out 기능을 구현하였습니다. 이 기능은 비동기적으로
                실행되기 때문에, scroll 같은 이벤트 기반의 요소 관찰에서
                발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제 없이 사용할
                수 있습니다.
              </div>
              <pre className="bg-[#282a36] text-white mt-4">
                <code dangerouslySetInnerHTML={{ __html: code }} />
              </pre>
            </div>
            <div className=" mb-12">
              <p className="text-[1.5vw] font-semibold">
                2. 안전구역, 안전점수
              </p>
              <div className="flex">
                <div className="text-[1.2vw] break-keep	">
                  공공데이터에서 받아온 경찰서, cctv, 가로등 위치 기반으로 각각
                  3점, 2점, 1점(근처에 cctv가 있는 가로등만)으로 특정 범위내에
                  몇 개가 포함되는지 판별하여 점수를 계산하였습니다.
                </div>
                <Image src={sya4} alt="sya4" className="w-1/3" />
              </div>
              <div className="flex">
                <div className="text-[1.2vw] break-keep	">
                  광주 지역을 275*593개로 나눈 후 R-tree알고리즘을 활용하여
                  나눠진 범위의 점수를 계산, 페이지 최적화를 위해 점수들을
                  145*72의 파일 형태로 나누어서 import했습니다. 뷰포트의 좌상,
                  우하의 좌표를 이용해서 필요한 파일을 최소한으로 불러오는
                  방식을 택했습니다.
                </div>
                <Image src={sya5} alt="sya5" className="w-1/3" />
              </div>
            </div>
            <div className=" mb-12">
              <p className="text-[1.5vw] font-semibold">3. 실시간 위치 확인</p>
              <div className="text-[1.2vw] break-keep	">
                navigator.geolocation을 이용하여 유저의 위치를 받고 서버에
                본인의 위치 정보를 보내고 상대방의 위치를 받아오는 형식으로 구현
                하였습니다. 페이지에 부하가 생기는 것을 방지하기 위해
                getCurrentPosition를사용하였습니다. 이후 두 유저의 위치를
                kakaoMap API의 imageMarker를 사용해서 표시하였습니다.
              </div>
            </div>
            <div className=" mb-12">
              <p className="text-[1.5vw] font-semibold">4. 느끼고 배운 점</p>
              <div className="text-[1.2vw] break-keep	">
                1) 계획의 중요성을 알게 되었습니다. 주어진 기간에 맞게 계획을 잘
                세우고 일정 관리를 잘 해야 결과물이 안정적으로 나온다고
                느꼈습니다.
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
      </div>
    </>
  );
};

export default SeeYouAgain;
