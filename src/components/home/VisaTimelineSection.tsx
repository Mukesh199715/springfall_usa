import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisaTimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "Receive University Acceptance",
      desc: "Secure admission into a SEVP-approved U.S. school and receive an acceptance letter. This is the first step in your F-1 visa journey.",
      timeframe: "6–12 months",
      icon: <CalendarDays className="w-6 h-6" />,
    },
    {
      title: "Receive Form I-20",
      desc: "After accepting admission, your university will issue Form I-20. This document is essential for your visa application.",
      timeframe: "3–5 months before program start",
      icon: <CalendarDays className="w-6 h-6" />,
    },
    {
      title: "Pay SEVIS Fee",
      desc: "Pay the $350 SEVIS I-901 fee online using your I-20 SEVIS ID. Keep the confirmation for your records.",
      timeframe: "At least 3 days before DS-160",
      icon: <CalendarDays className="w-6 h-6" />,
    },
    {
      title: "Complete DS-160 Form",
      desc: "Fill out the DS-160 online visa application. Upload a digital photo and note the confirmation number.",
      timeframe: "2–3 months before intended travel",
      icon: <CalendarDays className="w-6 h-6" />,
    },
    {
      title: "Schedule Visa Interview",
      desc: "Pay the MRV visa fee and schedule your interview at a U.S. embassy or consulate in your country.",
      timeframe: "2–3 months before program start",
      icon: <CalendarDays className="w-6 h-6" />,
    },
    {
      title: "Attend Visa Interview",
      desc: "Attend your interview with required documents. The officer will determine your F-1 visa eligibility.",
      timeframe: "1–3 months before travel",
      icon: <CalendarDays className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate each step individually
      stepsRef.current.forEach((el, idx) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: idx * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // Animate CTA
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="visa-timeline-section"
      ref={sectionRef}
      className="py-32 md:py-40 bg-gradient-to-b from-slate-950 via-black to-blue-950 text-white overflow-hidden relative"
    >
      {/* Background patterns */}
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

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            F‑1 Visa <span className="text-blue-300">Timeline</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Plan ahead for your F‑1 visa journey. A smooth process starts with clear steps and confidence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 to-blue-500/70 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  ref={(el) => (stepsRef.current[idx] = el)}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 opacity-0 ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="z-10 flex-shrink-0 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>

                  <div className="md:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/20 rounded-xl text-blue-300 group-hover:bg-blue-500/30 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-gray-300 leading-relaxed">{step.desc}</p>
                        <span className="inline-block mt-4 bg-blue-500/20 text-blue-300 text-sm px-3 py-1.5 rounded-full font-medium">
                          {step.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-24 text-center opacity-0">
          <Link
            to="/resources#timeline"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
          >
            View Full Visa Timeline
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisaTimelineSection;
