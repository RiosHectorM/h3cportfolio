'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import Contact from '../components/Contact';
import { contacts } from '../constants';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-q-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="justify-center items-center"
        >
          <div className="flex justify-around align-middle text-center">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Hector Martin Rios
            </h4>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            Full Stack Developer
          </p>
        </motion.div>

        <div className="mb-[50px] h-[2px] bg-white opacity-10 pt-5" />
        <motion.div className="mt-[50px] flex flex-col gap-[30px]">
          <a href="./HMRiosCV.pdf" download="HMRiosCV.pdf">
            <motion.div
              variants={fadeIn('right', 'tween', 0, 1)}
              className="flex flex-row items-center "
            >
              <div className="justify-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] items-center text-center z-50">
                <img
                  src="./iconcv.png"
                  alt="icon"
                  className="w-[90%] h-[90%] object-contain"
                />
              </div>
              <p className="pl-2 font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white z-50 underline-offset-0">
                Download CV
              </p>
            </motion.div>
          </a>
          {contacts.map((item, index) => (
            <motion.div
              variants={fadeIn('right', 'tween', 0.5 * index, 1)}
              className="flex flex-row items-center"
            >
              <Contact key={contacts.item} {...item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
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
