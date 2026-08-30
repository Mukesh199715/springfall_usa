import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Card from '../common/Cards';
import aboutus from '../../assets/images/aboutus.jpg';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  let navigate = useNavigate();

  const imageRef = useRef(null);
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const btnRef = useRef(null);
  const paraRef = useRef(null);
  const cardRef = useRef(null);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);

  const [countStats, setCountStats] = useState({
    students: 0,
    countries: 0,
    experiences: 0,
    universities: 0
  });

  const finalStats = {
    students: 100000,
    countries: 5,
    experiences: 1000,
    universities: 3
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.3 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      tl.fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: .9, ease: 'power2.out' })
        .fromTo(titleRef1.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, "-=0.6")
        .fromTo(titleRef2.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.5")
        .fromTo(btnRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, "-=0.4")
        .fromTo(paraRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, "-=0.4")
        .fromTo(cardRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.3")
        .fromTo(statsRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.4");
    });

    return () => ctx.revert();
  }, []);

  const startCountAnimation = () => {
    const duration = 2000;
    const interval = 20;
    const steps = {
      students: finalStats.students / (duration / interval),
      countries: finalStats.countries / (duration / interval),
      experiences: finalStats.experiences / (duration / interval),
      universities: finalStats.universities / (duration / interval)
    };

    let current = { ...countStats };

    const timer = setInterval(() => {
      current.students += steps.students;
      current.countries += steps.countries;
      current.experiences += steps.experiences;
      current.universities += steps.universities;

      setCountStats({
        students: Math.min(Math.floor(current.students), finalStats.students),
        countries: Math.min(Math.floor(current.countries), finalStats.countries),
        experiences: Math.min(Math.floor(current.experiences), finalStats.experiences),
        universities: Math.min(Math.floor(current.universities), finalStats.universities)
      });

      if (
        current.students >= finalStats.students &&
        current.countries >= finalStats.countries &&
        current.experiences >= finalStats.experiences &&
        current.universities >= finalStats.universities
      ) {
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Headings and Image */}
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-10">
            <img
              ref={imageRef}
              src={aboutus}
              alt="Team discussion"
              className="w-[280px] sm:w-[300px] lg:w-[320px] h-[80px] sm:h-[90px] lg:h-[96px] object-cover rounded-full"
            />
            <h1
              ref={titleRef1}
              className="flex flex-wrap justify-center lg:justify-start items-baseline text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-none"
            >
              <span className="font-bold">Our Mission</span>
              <span className="font-light ml-3"> & Vision</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-10">
            <h2
              ref={titleRef2}
              className="flex flex-wrap justify-center lg:justify-start items-baseline text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-none"
            >
              <span className="font-normal">About</span>
              <span className="font-bold mx-3">Spring/Fall</span>
              <span className="font-light">USA</span>
            </h2>

            <button
            onClick={()=>navigate('/about')} 
              ref={btnRef}
              className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full flex items-center justify-center space-x-3 hover:bg-[#000]/70 hover:shadow-md hover:shadow-white/50 transition-all"
            >
              <span className="text-xs sm:text-sm font-medium tracking-widest">
                WHAT WE DO
              </span>
              <div className="bg-black p-2 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 
                      0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                      11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 
                      0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Description */}
        <div
          ref={paraRef}
          className="text-center mt-16 text-lg text-black/80 max-w-3xl mx-auto"
        >
          <p>
            Empowering international students with knowledge, resources, and support
            to navigate the F-1 visa process and achieve their dreams of studying
            in the United States.
          </p>
        </div>

        {/* Cards Section */}
        <div ref={cardRef} className="py-20 flex justify-center">
          <div className="text-white">
            <Card />
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default AboutUsSection;
