import React from "react";
import useInView from "./useInView";
import classNames from "classnames";
import styles from "./Web.module.scss";

const SeeYouAgain: React.FC = () => {
  const [ref, isInView] = useInView(0.7);
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
          ref={ref}
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

export default SeeYouAgain;
