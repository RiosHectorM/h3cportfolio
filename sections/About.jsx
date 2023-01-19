'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        tittle="| About Hector Martin Rios"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text[32px] text-[20px] text-center text-secondary-white"
      >
        <b>Argentine software developer</b>, with experience in development of
        <b> Web Pages, Mobile Applications and Desktop Software.</b>
        <br />I learned different technologies throughout all this time in a
        self-taught way, through courses on
        <b> Udemy, FreeCodeCamp, Linkeding Learning and YouTube.</b> <br />
        In this portfolio you can see <b> some of my works </b>developed with
        different technologies such as
        <b> Javascript, React, Next, Node, MySql, MongoDB, PostgreSQL, Python
        </b>, among others, with the help of
        <b> Git and GitHub </b>to store and display my projects.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.5, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
