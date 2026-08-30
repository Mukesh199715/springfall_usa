import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Calendar,
  Users,
  Globe,
  Award,
} from "lucide-react";
import degree from "../../assets/images/degree.jpg";

gsap.registerPlugin(ScrollTrigger);

const StudyUSASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: <BookOpen size={20} />,
      title: "World-Class Education",
      desc: "Top-ranked universities and cutting-edge STEM & business programs.",
    },
    {
      icon: <Clock size={20} />,
      title: "OPT & CPT Benefits",
      desc: "Up to 36 months of work experience in your field post-study.",
    },
    {
      icon: <Calendar size={20} />,
      title: "Flexible Intakes",
      desc: "Start in Spring, Summer, or Fall — your timeline, your choice.",
    },
    {
      icon: <Users size={20} />,
      title: "Global Network",
      desc: "Connect with students from 190+ countries and build lifelong ties.",
    },
    {
      icon: <Globe size={20} />,
      title: "Cultural Immersion",
      desc: "Live, learn, and grow in diverse cities across the USA.",
    },
    {
      icon: <Award size={20} />,
      title: "Career Pathways",
      desc: "Seamless transition from F-1 to H-1B and long-term U.S. careers.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading, text, cards, and button together
      gsap.fromTo(
        [headingRef.current, paraRef.current, ...cardsRef.current, buttonRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Image slide-in from right
      gsap.fromTo(
        imageWrapperRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="study-usa-section"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-black to-blue-950 text-white overflow-hidden relative"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(100, 180, 255, 0.3), transparent 1px),
            linear-gradient(rgba(100, 180, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 180, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 40px 40px, 40px 40px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-16 left-6 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-6 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side: Text & Cards */}
          <div className="space-y-6">
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              Your Gateway to{" "}
              <span className="text-blue-300">Studying in the USA</span>
            </h2>

            <p
              ref={paraRef}
              className="text-sm md:text-base text-gray-300 max-w-lg leading-relaxed"
            >
              The F-1 visa unlocks world-class education, hands-on training, and global career opportunities in the U.S.
            </p>

            {/* Compact Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm md:text-base font-semibold text-white group-hover:text-blue-200 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-blue-400/30 blur-xl pointer-events-none" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div ref={buttonRef} className="pt-2">
              <Link
                to="/f1-visa-info"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                Learn About F-1 Visa
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div
            ref={imageWrapperRef}
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform duration-700 hover:scale-[1.02]"
          >
            <img
              src={degree}
              alt="International students celebrating graduation in the USA"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyUSASection;