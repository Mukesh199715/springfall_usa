import React, { useEffect, useRef, useState } from "react";
import { Users, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import arkansasImg from "@/assets/images/arkansas.png";
import roanokeImg from "@/assets/images/roanoke.png";
import ukentucyImg from "@/assets/images/ukentucy.png";
import jackImg from "@/assets/images/jack.png";
import lissaImg from "@/assets/images/lissa.png";
import yvetteImg from "@/assets/images/yvette.png";
import duolingo from "@/assets/images/logo/duolingo.png";
import qatar from "@/assets/images/logo/Qatar_Airways.png"
import devxora from "@/assets/images/logo/wesiteLogo.png"
import nbc from "@/assets/images/logo/nbc.png";

gsap.registerPlugin(ScrollTrigger);

const PartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  // Use mutable refs for card collections
  const uniCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const officerCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [hoveredUniversity, setHoveredUniversity] = useState<number | null>(
    null
  );
  const [hoveredOfficer, setHoveredOfficer] = useState<number | null>(null);

  useEffect(() => {
    // Delay slightly to ensure DOM is fully mounted
    const timeoutId = setTimeout(() => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        // Animate header
        gsap.fromTo(
          [headingRef.current, paraRef.current],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Filter out null refs before animating
        const validUniCards = uniCardsRef.current.filter(
          (el): el is HTMLDivElement => el !== null
        );
        gsap.fromTo(
          validUniCards,
          { opacity: 0, y: 60, autoAlpha: 0 },
          {
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.25,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        const validOfficerCards = officerCardsRef.current.filter(
          (el): el is HTMLDivElement => el !== null
        );
        gsap.fromTo(
          validOfficerCards,
          { opacity: 0, y: 60, autoAlpha: 0 },
          {
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.25,
            ease: "back.out(1.2)",
            delay: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }, sectionRef);

      // Cleanup
      return () => {
        ctx.revert();
      };
    }, 100); // slight delay to ensure DOM hydration

    return () => clearTimeout(timeoutId);
  }, []);

  // Safe ref assignment
  const setUniRef = (el: HTMLDivElement | null, index: number) => {
    uniCardsRef.current[index] = el;
  };

  const setOfficerRef = (el: HTMLDivElement | null, index: number) => {
    officerCardsRef.current[index] = el;
  };

  const universities = [
    {
      name: "Arkansas State University",
      logo: arkansasImg,
      website: "https://www.astate.edu/",
      description:
        "A vibrant campus community with comprehensive academic programs",
    },
    {
      name: "University of Kentucky",
      logo: ukentucyImg,
      website: "https://www.uky.edu/",
      description: "Kentucky's flagship institution of higher education",
    },
    {
      name: "Roanoke College",
      logo: roanokeImg,
      website: "https://www.roanoke.edu/",
      description:
        "A private liberal arts college in the beautiful Roanoke Valley",
      newPrograms:
        "Launched nine new undergraduate and one new graduate program in fall 2024. From finance to marketing to cannabis studies.",
    },
  ];

  const visaOfficers = [
    {
      name: "Jack Runkle",
      logo: jackImg,
      website: "visainterviewcoach.com",
      promo: "SPRINGFALL - 20% OFF",
      description: "Former consular officer with 15+ years experience",
    },
    {
      name: "Lissa Anderson",
      logo: lissaImg,
      website: "argovisa.com",
      promo: "Email with Spring/Fall USA name for discount",
      description: "Specializing in complex visa cases and appeals",
    },
    {
      name: "Yvette Bansal",
      logo: yvetteImg,
      website: "udetivisa.com",
      promo: "SPRINGFALL20 - 20% OFF",
      description: "Expert in student visa interview preparation",
    },
  ];

  const affiliates = [
    { id: "motaword", name: "Motaword", logo: duolingo },
    { id: "aiea", name: "AIEA", logo: qatar },
    { id: "airc", name: "AIRC", logo: devxora },
    {
      id: "immigration-jobs",
      name: "Immigration Jobs Talk Show",
      logo: nbc,
    },
    // Add more if needed, or keep 4–5
  ];

  return (
    <section
      id="affiliates-section"
      ref={sectionRef}
      className="py-28 md:py-36 bg-gradient-to-b from-black via-neutral-950 to-black text-white overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          transform: "rotate(-30deg)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-24 opacity-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-visa-blue to-visa-navy rounded-full">
              <Users size={28} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Our <span className="text-white">Affiliates</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-visa-blue to-transparent mx-auto mb-5" />
          <p
            ref={paraRef}
            className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed opacity-0"
          >
            Trusted partnerships that empower students with expert guidance,
            exclusive resources, and seamless pathways to F-1 visa success.
          </p>
        </div>

        {/* University Affiliates */}
        <div className="mb-32">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            University Affiliates
          </h3>
          <div className="flex flex-wrap justify-center gap-10 md:gap-2">
            {universities.map((uni, index) => (
              <div
                key={uni.name}
                ref={(el) => setUniRef(el, index)}
                className="group relative bg-gradient-to-b from-neutral-900 to-neutral-950 text-white p-8 rounded-2xl w-80 md:w-86 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-visa-blue/20 border border-neutral-800 hover:border-visa-blue/40 backdrop-blur-sm opacity-0"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white rounded-full h-32 w-32 p-4 flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="object-contain h-20 group-hover:rotate-3 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-bold group-hover:text-visa-blue transition-colors duration-300">
                    {uni.name}
                  </h4>
                  <p className="text-sm text-gray-300 mt-3 min-h-[60px] leading-relaxed">
                    {uni.description}
                  </p>
                  {uni.name === "Roanoke College" && (
                    <p className="text-xs text-visa-blue mt-2 italic border-t border-visa-blue/30 pt-2">
                      {uni.newPrograms}
                    </p>
                  )}
                  <a
                    href={uni.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-visa-blue hover:text-visa-lightblue text-sm mt-5 font-medium transition-colors duration-300"
                  >
                    Visit Website{" "}
                    <ExternalLink
                      size={14}
                      className="group-hover:rotate-6 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visa Officer Affiliates */}
        <div className="mb-32">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Visa Officer Affiliates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {visaOfficers.map((officer, index) => (
              <div
                key={officer.name}
                ref={(el) => setOfficerRef(el, index)}
                onMouseEnter={() => setHoveredOfficer(index)}
                onMouseLeave={() => setHoveredOfficer(null)}
                className="group relative bg-gradient-to-b from-neutral-900 to-neutral-950 text-white py-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl  hover:shadow-visa-blue/25 border border-neutral-800 hover:border-visa-blue/50 backdrop-blur-sm opacity-0"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={officer.logo}
                    alt={officer.name}
                    className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg mb-5 group-hover:ring-4 group-hover:ring-visa-blue/50 transition-all duration-300"
                  />
                  <h4 className="text-2xl font-bold">{officer.name}</h4>
                  <a
                    href={`https://${officer.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-visa-blue hover:text-visa-lightblue text-sm mt-1 flex items-center gap-1 transition-colors duration-300"
                  >
                    {officer.website} <ExternalLink size={12} />
                  </a>
                  <p className="text-sm text-gray-300 mt-4 mb-3 leading-relaxed">
                    {officer.description}
                  </p>
                  <span
                    className={`inline-block px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-visa-blue to-visa-navy text-white transition-all duration-500 transform ${
                      hoveredOfficer === index
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-90"
                    }`}
                  >
                    {officer.promo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        {/* <div ref={quoteRef} className="text-center max-w-4xl mx-auto mt-28 relative px-8 opacity-0">
          <blockquote className="text-gray-200 text-2xl md:text-xl font-light leading-relaxed ">
            “Spring/Fall USA has been an invaluable resource for our international students seeking F-1 visas. Their personalized coaching and insider expertise make a real difference.”
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-visa-blue to-transparent mx-auto my-8" />
          <cite className="not-italic font-semibold text-white text-xl md:text-2xl">
            — Dr. Sarah Johnson, International Student Advisor
          </cite>
          <span className="absolute text-8xl text-white opacity-10 top-[-40px] left-2 select-none">“</span>
          <span className="absolute text-8xl text-white opacity-10 bottom-[-50px] right-2 select-none">”</span>
        </div> */}
        <section className=" py-16 px-4">
          <div className="container mx-auto text-center">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
              Key Supporters
            </h2>

            {/* Logos Row */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
              {affiliates.map((affiliate) => (
                <div
                  key={affiliate.id}
                  className="flex-shrink-0 hover:grayscale-0 transition duration-300 opacity-80 hover:opacity-100 "
                >
                  <img
                    src={affiliate.logo}
                    alt={`${affiliate.name} Logo`}
                    className="w-52 h-28 object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Floating Accents */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-visa-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-visa-navy/10 rounded-full blur-3xl" />
    </section>
  );
};

export default PartnersSection;
