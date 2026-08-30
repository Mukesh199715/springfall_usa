import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anjali Sinha",
    role: "MS in CS - USA",
    message:
      "Spring/Fall helped me throughout my F1 Visa journey. The guidance and prep resources were a lifesaver. Highly recommended!",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "MS in Data Science - USA",
    message:
      "I was nervous about the visa process, but Spring/Fall made it smooth. The interview prep and mock sessions were excellent.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "BS in Engineering - USA",
    message:
      "Incredible support system. The team made the entire process easy to understand and navigate.",
  },
];

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "back.out(1.1)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="relative bg-gradient-to-b from-slate-950 via-black to-blue-950 py-32 md:py-40 text-white overflow-hidden"
    >
      {/* Subtle animated grid */}
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

      {/* Title */}
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200 relative z-10">
          What Students Say About Us
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 relative z-10">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="group relative p-8 rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-default opacity-0"
          >
            {/* Hover glow overlay */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-15 bg-cyan-400/30 blur-xl pointer-events-none" />

            <CardContent className="p-0 relative z-10">
              <p className="text-base md:text-lg leading-relaxed text-gray-200 italic mb-6">
                “{testimonial.message}”
              </p>
              <div>
                <p className="text-lg md:text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </CardContent>

            {/* Decorative border glow on hover */}
            <div className="absolute inset-0 rounded-3xl border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </Card>
        ))}
      </div>

      {/* Ambient Glow Blurs */}
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-cyan-500/20 blur-[180px] rounded-full z-0 pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-blue-600/20 blur-[180px] rounded-full z-0 pointer-events-none" />
    </section>
  );
};

export default TestimonialsSection;