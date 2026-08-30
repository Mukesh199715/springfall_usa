import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutContent = [
  {
    title: "Our Mission",
    description:
      "Empowering international students with confidence, clarity, and powerful resources to navigate the F-1 visa process.",
  },
  {
    title: "Our Story",
    description:
      "Built by international students in 2019, now a trusted community empowering thousands across the globe.",
  },
  {
    title: "Our Values",
    description: [
      "Integrity & Transparency",
      "Community Support",
      "Educational Excellence",
      "Global Perspective",
    ],
  },
];

const Cards = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: cardsRef.current[0]?.closest(".grid-container"),
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative rounded-xl z-10 py-24 px-4 md:px-8 overflow-hidden bg-black text-white ">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 120, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 120, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {aboutContent.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-gradient-to-br from-gray-950 to-black border border-blue-500/20 rounded-3xl p-7 md:p-8 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,120,255,0.2)] will-change-transform"
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-blue-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Border highlight */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/40 transition-colors duration-500 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-5 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {item.title}
                </h3>

                {Array.isArray(item.description) ? (
                  <ul className="space-y-3">
                    {item.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-300"
                      >
                        <span className="block w-2 h-2 bg-blue-400 rounded-full shadow-md shadow-blue-400/50 group-hover:scale-110 transition-transform" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Corner accents with blue glow */}
              <div className="absolute top-5 right-5 w-16 h-16 border-r-2 border-t-2 border-blue-400/30 rounded-tr-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-5 left-5 w-12 h-12 border-l-2 border-b-2 border-blue-400/30 rounded-bl-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none">
        <svg
          className="w-full h-full text-black"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30C144 0 432 60 720 30C1008 0 1296 60 1440 30V60H0V30Z"
            fill="black"
          />
        </svg>
      </div>
    </section>
  );
};

export default Cards;