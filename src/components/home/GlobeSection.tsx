import React from 'react';
import { motion } from 'framer-motion';
import globeBg from '@/assets/images/globe.bg.svg';

const GlobeSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative h-auto w-full bg-black text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-0"></div>

      {/* Responsive Globe - Centered at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
<img
  src={globeBg}
  alt="Global Network"
  className="w-[120vw] sm:w-[90vw] md:w-[70vw] lg:w-[1000px] h-20 lg:h-auto max-w-full"
  style={{
    filter: 'brightness(1.2) contrast(1.1)',
    opacity: 0.9,
  }}
  loading="lazy"
/>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px 0px -50px 0px' }}
          variants={titleVariants}
          className="max-w-4xl mx-auto text-center mb-6 sm:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Global Support for Students
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 opacity-90 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2">
            A U.S.-based nonprofit empowering international students with accurate visa guidance, resources, and support — wherever you are.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-6xl mx-auto w-full px-4"
        >
          {[
            {
              title: '100+ Country Coverage',
              description: 'Access tailored visa information for over 100 countries, updated regularly by immigration experts.',
            },
            {
              title: 'Free Expert Guidance',
              description: 'Get reliable, up-to-date advice from verified counselors and alumni networks worldwide.',
            },
            {
              title: 'Scholarship Resources',
              description: 'Discover funding opportunities and application support for international education.',
            },
            {
              title: '24/7 Community Support',
              description: 'Join a global network of students sharing experiences, tips, and real-time updates.',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-5 text-center transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-800/20 hover:scale-105"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-blue-50 to-purple-100 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Spacer */}
        <div className="h-16 sm:h-24 md:h-32 lg:h-40 xl:h-48"></div>
      </div>
    </section>
  );
};

export default GlobeSection;