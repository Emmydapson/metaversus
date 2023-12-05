'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { NewFeatures, TitleText, TypingText } from '../components';
import {  staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto  flex flex-col`}
    >
      <TypingText title="| People on the World" textstyles="text-center" />
      <TitleText title={(
        <>
          Track friends around you and invite them to play together in the same world
        </>
      )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-5 w-[196px] h-[150px] p-[6px] square-full bg-[#5d6680] rounded-3xl">
          <img src="Mask Group-left.png" alt="people" className="w-full h-full" />
          <img src="ellipse 44" alt="person" className="w-6 h-6 rounded-full" />
        </div>
        <div className="absolute top-1/4 right-[35%] w-[196px] h-[150px] p-[6px] square-full bg-[#5d6680] rounded-3xl">
          <img src="Mask Group.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
