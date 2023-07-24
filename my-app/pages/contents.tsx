import React, { useState } from "react";
import "animate.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import computer from "../public/images/hero-devices.png";

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
    router.push("/about");
  };
  const goToProject = () => {
    setShowProject(true);
    router.push("/project");
  };

  return (
    <div className="w-full h-screen bg-[#7510F7] px-[10rem] text-9xl">
      <div className="absolute top-1/3 font-bold text-white">
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
      <div className="absolute bottom-0 right-0 w-1/2">
        <Image src={computer} alt="computer" layout="responsive" />
      </div>
    </div>
  );
};

export default Contents;
