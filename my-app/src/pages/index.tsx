import React, { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import Web from "@/src/conponents/web";
import Mobile from "@/src/conponents/mobile/mobile";
const HomePage: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width && width <= 768;
  return <div>{isMobile ? <Mobile /> : <Web />}</div>;
};

export default HomePage;
