'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import Contact from '../components/Contact';
import { contacts } from "../constants";
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-q-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="justify-center items-center"
        >
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Hector Martin Rios
          </h4>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            Full Stack Developer
          </p>
        </motion.div>
        <div className="mb-[50px] h-[2px] bg-white opacity-10 pt-5" />
        <motion.div className="mt-[50px] flex flex-col gap-[30px]">
          {contacts.map((item, index) => (
            <motion.div
              variants={fadeIn("right", "tween", 0.5 * index, 1)}
              className="flex flex-row items-center"
            >
              <Contact key={contacts.item} {...item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/contact.jpg"
          alt="contact"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
