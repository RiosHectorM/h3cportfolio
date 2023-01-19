'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

function textAnimate(texto) {
  return (
    <div className="bg-white rounded-full flex justify-center items-center">
      <a href="#explore">
        <svg>
          <text x="0" y="20%">
            {texto}
          </text>
        </svg>
      </a>
    </div>
  );
}

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    />
    <div className="flex justify-center items-center flex-col relative z-10">
      <motion.h1
        variants={textVariant(1.1)}
        initial="hidden"
        whileInView="show"
        className={styles.heroHeading}
      >
        Software
      </motion.h1>
      <motion.div
        variants={textVariant(1.2)}
        initial="hidden"
        whileInView="show"
        className="flex flex-row justify-center items-center"
      >
        <h1 className={styles.heroHeading}>Developer</h1>
      </motion.div>
    </div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      className="relative w-full md:-mt-[20px] -mt-[12px]"
    >
      <div className="absolute w-full h-[200px] hero-gradient  rounded-l-[140px] z-[0] -top-[30px] shadow-2xl shadow-white" />
      <img
        src="/hhh.jpg"
        alt="cover"
        className="w-full sm:h-[280px] h-[200px] object-cover rounded-[140px] z-10 relative shadow-2xl "
      />
    </motion.div>
    {/* <div className="flex pt-6 md:flex-row flex-col justify-center items-center md:justify-around ">
      <h1 className="mint textoBar border-8 p-2 m-2 w-[50%] md:w-auto text-center hover:bg-red-900">About Me</h1>
      <h1 className="mint textoBar border-8 p-2 m-2 w-[50%] md:w-auto text-center">Project's</h1>
      <h1 className="mint textoBar border-8 p-2 m-2 w-[50%] md:w-auto text-center">Skill's</h1>
      <h1 className="mint textoBar border-8 p-2 m-2 w-[50%] md:w-auto text-center">Soft Skill's</h1>
      <h1 className="mint textoBar border-8 p-2 m-2 w-[50%] md:w-auto text-center">Formation</h1>
      <h1 className="mint textoBar border-8 p-2 m-2 w-[50%] md:w-auto text-center">Contact</h1>
    </div> */}
  </section>
);

export default Hero;
