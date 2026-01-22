import React from 'react';
import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs';
import LearningPath from './LearningPath';
import InstructorSection from './InstructorSection';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <WhyChooseUs></WhyChooseUs>
           <LearningPath></LearningPath>
           <InstructorSection></InstructorSection>
            
        </div>
    );
};

export default Home;