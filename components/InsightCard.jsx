'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, url, index }) => (
  <motion.div
    variant={fadeIn('up', 'spring', index * 0.4, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <a href={url} target="_blank" rel="noreferrer">
      <img
        src={imgUrl}
        alt="jobs-prev"
        className="md:w-[350px] w-full h-[250px] rounded-[32px] object-cover"
      />
    </a>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[36px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
