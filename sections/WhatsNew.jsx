'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 w-full`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex justify-center flex-col w-full"
        initial="hidden"
        whileInView="show"
      >
        <TypingText tittle="| Soft Skills" />
        <TitleText tittle={<>Some Soft Skills</>} />
        <div className="mt-[48px] flex flex-wrap flex-col md:flex-row md:justify-around gap-[24px] w-full ">
          {newFeatures.map((feature, index) => (
            <motion.div variants={fadeIn('right', 'tween', 0.3 * index, 1)}>
              <NewFeatures key={feature.title} {...feature} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
