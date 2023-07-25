import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import computer from "../public/images/hero-devices.png";
import man from "../public/images/mf-avatar.svg";
import "animate.css";

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const HomePage: React.FC = () => {
  const [isClicked, toggleClicked] = useCycle(false, true);
  const router = useRouter();
  const changePage = () => {
    toggleClicked();
    setTimeout(() => {
      router.push("/contents");
    }, 300);
  };
  return (
    <div className="py-10 h-screen w-full bg-white">
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1 }}
        className="text-center text-[2.5vw] font-bold"
      >
        Frontend Developer
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-[1.5vw] text-center text-gray-500"
      >
        개발이 재미있는 개발자
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-2 text-[2vw]"
      >
        <span className="w-fit items-baseline flex m-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 1, delay: 1.4 }}
            className="mx-4"
          >
            <span className="text-[#7510F7] text-[3vw] font-semibold">
              최형운
            </span>
          </motion.div>
          입니다.
        </span>
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{ duration: 1, delay: 2.3 }}
        className="mx-4"
      >
        <div className="relative w-fit m-auto" onClick={changePage}>
          <motion.div
            initial={{
              scale: 1,
              backgroundColor: "rgb(117, 16, 247)",
            }}
            animate={{
              scale: isClicked ? 100 : 1,
              backgroundColor: isClicked
                ? "rgb(117, 16, 247)"
                : "rgb(117, 16, 247)",
            }}
            transition={{ duration: 2 }}
            className="rounded-full w-[163.82px] h-[163.82px] mt-[5vh]"
          >
            {!isClicked && (
              <>
                <Image
                  src={man}
                  alt="man"
                  width={150}
                  height={100}
                  className="m-auto animate__animated animate__bounce animate__delay-3s animate__slow animate__infinite"
                />
                <div className="text-4xl text-red-500 font-bold absolute bottom-10 w-full text-center">
                  Click
                </div>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
      {!isClicked && (
        <div className="absolute bottom-10">
          <div className="w-1/2 m-auto ">
            <Image src={computer} alt="computer" layout="responsive" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
