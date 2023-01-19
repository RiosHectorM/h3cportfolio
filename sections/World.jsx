'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, zoomIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} relative mx-auto flex flex-col z-10`}
    >
      <TypingText
        tittle="| I can work remotely or also change location"
        textStyles="text-center"
      />
      <TitleText
        tittle={
          <>
            Without distances... Without Limits to Work together and continue
            Learning
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={zoomIn(0.4, 1)}
        className="relative mt-[68px] flex w-full  n-[550px]"
      >
        <img
          src="/global-5.jpg"
          alt="map"
          className="w-full h-full object-cover rounded-[100px] -mt-[150px] relative -z-10"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
