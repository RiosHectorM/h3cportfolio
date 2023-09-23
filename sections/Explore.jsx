'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';

import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('p-1');
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText tittle="| Projects" textStyles="text-center" />
        <TitleText
          tittle={(
            <>
              Choose one Project <br className="md:block hidden" /> for
              details...{' '}
            </>
          )}
          textStyles="text-center"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
