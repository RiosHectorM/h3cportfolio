'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  deploy,
  gitHub,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.2, 0.75)}
    className="relative w-full min-h-[400px] items-center justify-center  transition-[flex] duration-[1s] ease-out-flex cursor-pointer"
    initial="hidden"
    whileInView="show"
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className={`absolute w-full h-full object-cover rounded-[24px] hover:brightness-100 ${
        active === id ? 'brightness-100' : 'brightness-50'
      } cursor-pointer`}
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 right-0 bottom-10 origin-[0,0] bg-black p-3 rounded-xl">
        {title}
      </h3>
    ) : (
      <motion.div
        className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
        variants={fadeIn('up', 'spring', 0, 0.75)}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex justify-around">
          <a href={deploy} target="_blank" rel="noreferrer">
            <p className="font-normal text-[16px] leading-[20px] text-white uppercase bg-black p-3 rounded-xl">
              Open Proyect
            </p>
          </a>
          <a href={gitHub} target="_blank" rel="noreferrer">
            <p className="font-normal text-[16px] leading-[20px] text-white uppercase bg-black p-3 rounded-xl">
              See Code in GitHub
            </p>
          </a>
        </div>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </motion.div>
    )}
  </motion.div>
);

export default ExploreCard;
