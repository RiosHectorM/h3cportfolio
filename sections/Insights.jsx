'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText tittle="| Additional Information" textStyles="text-center" />
      <TitleText
        tittle="Education and previous jobs"
        textStyles="text-center"
      />
      <motion.div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <motion.div
            variants={fadeIn("right", "tween", 0.3 * index, 1)}
            className="flex justify-center flex-col w-full"
            initial="hidden"
            whileInView="show"
          >
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
