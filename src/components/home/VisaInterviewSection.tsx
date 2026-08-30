import React, { useEffect, useRef } from "react";
import { ArrowRight, Download, Check, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";

const VisaInterviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Animate cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.1)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const interviewPoints = [
    "Legitimacy as a student and intent to study",
    "Financial resources to cover education and living expenses",
    "Strong ties to home country and intent to return after studies",
    "English language proficiency and academic preparation",
    "Complete and accurate documentation",
  ];

  const commonQuestions = [
    "Why did you choose this university?",
    "How will you finance your studies?",
    "What are your plans after graduation?",
    "Why study in the US instead of your home country?",
    "What is your family background?",
  ];

  return (
    <section
      id="visa-interview-section"
      ref={sectionRef}
      className="py-32 md:py-40 bg-gradient-to-b from-slate-950 via-black to-blue-950 text-white overflow-hidden relative "
    >
      {/* Subtle animated background */}
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

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
        >
          What to Expect at Your{" "}
          <span className="text-blue-300">Visa Interview</span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Evaluation Points */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="lg:col-span-3 group p-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Check className="text-blue-300" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">What Officers Evaluate</h3>
            </div>
            <ul className="space-y-4">
              {interviewPoints.map((point, index) => (
                <li key={index} className="flex items-start text-gray-300 text-sm leading-relaxed">
                  <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={16} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Interview Prep Guide */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="lg:col-span-3 group p-7 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl hover:from-blue-500 hover:to-blue-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 flex flex-col"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Download className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">Interview Prep Guide</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Download our free guide to prepare confidently and succeed in your F-1 visa interview.
              </p>
            </div>
            <Button className="mt-6 bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg font-semibold">
              <Download className="mr-2" size={18} />
              Download Free Guide
            </Button>
          </div>

          {/* Common Questions */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="md:col-span-2 lg:col-span-4 group p-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Mic className="text-blue-300" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Common Interview Questions</h3>
            </div>
            <ul className="space-y-4">
              {commonQuestions.map((question, index) => (
                <li key={index} className="flex items-start text-gray-300 text-sm leading-relaxed">
                  <span className="bg-blue-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  {question}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <Link
                to="/interview-prep"
                className="group inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300"
              >
                View all Q&A <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Ace Your Interview Box */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="md:col-span-1 lg:col-span-2 group p-7 bg-gradient-to-br from-slate-800 to-black border border-blue-500/30 rounded-2xl hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
          >
            <h3 className="text-xl font-bold text-white mb-4">Ace Your Interview with Confidence</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Preparation is everything. Understand what’s expected, practice smart, and walk in with the confidence to succeed.
            </p>
          </div>

          {/* Pro Tip Box */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="md:col-span-2 lg:col-span-6 group p-6 bg-yellow-50/10 backdrop-blur-sm border border-yellow-400/20 rounded-2xl flex items-start gap-4 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500"
          >
            <div className="bg-yellow-500/20 p-3 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg
                className="text-yellow-300 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300 text-sm uppercase tracking-wide">Pro Tip</h4>
              <p className="text-yellow-200 mt-1 text-sm leading-relaxed">
                Schedule a <strong className="text-white">free mock interview</strong> with our team and get detailed feedback to boost your confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInterviewSection;