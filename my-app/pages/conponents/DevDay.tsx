import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const DevDay: React.FC = () => {
  return (
    <div className="bg-[#7510F7] p-4 h-full">
      <p className="text-center text-[2vw] mb-4 text-white font-bold">DevDay</p>
      <iframe
        src="https://www.youtube.com/embed/xvINlpCsLYA?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7"
        className="w-full h-2/3 m-auto"
      />
    </div>
  );
};

export default DevDay;
