import React, { useState } from "react";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import me from "@/public/images/me-mobile.png";
import Footer from "@/src/conponents/mobile/naviBar";

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Contents: React.FC = () => {
  const router = useRouter();
  const [showAbout, setShowAbout] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const goToAbout = () => {
    setShowAbout(true);
    setTimeout(() => {
      router.push("/mobile/about");
    }, 500);
  };
  const goToProject = () => {
    setShowProject(true);
    setTimeout(() => {
      router.push("/mobile/project");
    }, 500);
  };
  const goToBack = () => {
    router.back();
  };

  return (
    <>
      <div className="w-full h-screen bg-[#7510F7] text-[10vw] overflow-x-hidden overflow-y-hidden">
        <div className="mt-[20vh] font-bold text-white z-50 px-[10vw]">
          <motion.div
            whileHover={{ scale: 1.1, color: "blue" }}
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 1 }}
            className={`animate__animated ${
              showAbout ? "animate__backOutRight" : ""
            } mb-8`}
            onClick={goToAbout}
          >
            <motion.div whileHover={{ scale: 1.1, color: "rgb(91, 233, 185)" }}>
              About
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 1, delay: 0.6 }}
            className={`animate__animated ${
              showProject ? "animate__backOutRight" : ""
            }`}
            onClick={goToProject}
          >
            <motion.div whileHover={{ scale: 1.1, color: "rgb(91, 233, 185)" }}>
              Project
            </motion.div>
          </motion.div>
        </div>
        <div className="h-1/2 z-99">
          <Image src={me} alt="me" layout="responsive" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contents;
