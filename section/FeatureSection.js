import React from 'react';
import styles from './featureSection.module.scss';
import FeatureCard from '@/components/FeatureCard';
import { HiBars4, HiBuildingLibrary } from 'react-icons/hi2';

let featureData = [
  {
    icon: <HiBars4 />,
    title: 'Business Stratagy',
    description:
      'I throw myself down among the tall grass by the stream as Ilie close to the earth.',
  },
  {
    icon: <HiBuildingLibrary />,
    title: 'App Development',
    description:
      ' We’ll handle everything from to app development process until it is time to make your project live. ',
  },

  {
    icon: <HiBars4 />,
    title: 'Business Stratagy',
    description:
      ' We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.',
  },

  {
    icon: <HiBars4 />,
    title: 'Mobile App',
    description:
      ' Using our expertise in mobile application development to create beautiful pixel-perfect designs.',
  },

  {
    icon: <HiBars4 />,
    title: 'SEO Optimisation',
    description:
      ' Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!',
  },

  {
    icon: <HiBars4 />,
    title: 'UX Consulting',
    description:
      'A UX consultant is responsible for many of the same tasks as a UX designer, but they typically.',
  },
];

const FeatureSection = () => {
  return (
      <div className={styles.container} id='features'>
          <h2>Features </h2>
          <h1>What i do </h1>

          <div className={styles.cardsContainer}>
              {featureData.map((item, index) => {
                  return (
                      <FeatureCard
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          decription={item.description}
                      />
                  );
              })}
          </div>
      </div>
  );
};

export default FeatureSection;
