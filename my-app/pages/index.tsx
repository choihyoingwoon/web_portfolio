import React, { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import Web from "../pages/conponents/web";
import Mobile from "../pages/conponents/mobile";
const HomePage: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width && width <= 768;
  return <div>{isMobile ? <Mobile /> : <Web />}</div>;
};

export default HomePage;
