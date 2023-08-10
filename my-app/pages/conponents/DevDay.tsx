import React, { useRef, useEffect } from "react";
import useInView from "./useInView";
import classNames from "classnames";
import styles from "./Web.module.scss";

const DevDay: React.FC = () => {
  const [ref, isInView] = useInView(0.7);
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
          src="https://www.youtube.com/embed/xvINlpCsLYA?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7"
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
        <div className="bg-white">
          <p className="text-center text-[2vw] mb-4 font-bold">SeeYouAgain</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
        </div>
      </div>
    </>
  );
};

export default DevDay;
