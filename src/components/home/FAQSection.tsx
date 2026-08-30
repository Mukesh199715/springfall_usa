import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "Can I work on an F-1 visa?",
      answer: "Yes, but with limitations. F-1 students can work on-campus up to 20 hours..."
    },
    {
      question: "How do I pay the SEVIS fee?",
      answer: "The SEVIS fee must be paid through the FMJfee.com website..."
    },
    {
      question: "What is the MRV fee, and how do I pay it?",
      answer: "The Machine Readable Visa (MRV) fee is the visa application fee..."
    },
    {
      question: "How early can I enter the US on an F-1 visa?",
      answer: "You can enter the United States up to 30 days before the program start date..."
    },
    {
      question: "What documents should I bring to my visa interview?",
      answer: "Bring your passport, DS-160 confirmation page, SEVIS receipt..."
    }
  ];

  return (
    <section
      id="faq-section"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0a0a0a] to-[#000] opacity-80 z-0" />
      <div className="container-custom max-w-6xl mx-auto relative z-10">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about the F-1 visa process and requirements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                ref={(el) => (itemsRef.current[index] = el)}
                className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-xl transition-all hover:shadow-blue-500/20"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-white/10 transition-colors text-lg font-semibold text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-300 p-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <Link to="/resources#faq">
            <Button className="bg-white text-black hover:bg-white/80 px-8 py-3 rounded-full shadow-lg transition-all duration-300">
              View All FAQs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
