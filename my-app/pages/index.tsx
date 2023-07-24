import { motion } from 'framer-motion';
import Image from 'next/image';
import happy from '../public/happy.jpg';

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const HomePage: React.FC = () => {
  return (
    <div className='p-12 py-20 relative'>
      <div className='text-black relative z-10'>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 1 }}
          className='m-8'
        >
          <span className='text-[3rem]'>개발이 재미있는</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 1, delay: 0.6 }}
          className='m-8 mt-12'
        >
          <span className='text-[3rem]'>Front-End Developer</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ duration: 1, delay: 1.2 }}
          className='m-8 '
        >
          <span className='text-[3rem] items-baseline flex'>
            제 이름은
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants}
              transition={{ duration: 1, delay: 2.0 }}
              className='mx-4'
            >
              <span className='text-blue-400 text-[4rem]'>최형운</span>
            </motion.div>
            입니다.
          </span>
        </motion.div>
      </div>
      <div className='absolute inset-0 z-0 h-screen w-full'>
        <Image src={happy} alt="Happy Image" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default HomePage;
