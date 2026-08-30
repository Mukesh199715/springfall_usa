import React, { useEffect, useRef } from "react";
import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DonationSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".donate-animate", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const paypalDonationUrl =
    "https://www.paypal.com/donate/?hosted_button_id=5VXV68NC6TC9U";

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 bg-gradient-to-br from-[#050505] via-[#020B17] to-[#000000] text-white overflow-hidden sm:py-20 md:py-28"
    >
      <div className="container-custom mx-auto max-w-6xl">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-12 lg:p-20 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Left Section */}
          <div className="donate-animate space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-snug tracking-tight">
              Empower the <span className="text-blue-500">Dreams</span>
              <br className="hidden sm:inline" /> of Future Scholars
            </h2>
            <p className="text-white/60 text-sm sm:text-lg mb-0 max-w-xs sm:max-w-md">
              Your support fuels free webinars, visa coaching, and educational
              access for international students.
            </p>

            <div className="space-y-5 sm:space-y-6 mt-2">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-white/10 rounded-xl flex-shrink-0">
                  <Gift size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-base sm:text-lg">
                    Sponsor Hope
                  </h4>
                  <p className="text-white/50 text-xs sm:text-sm">
                    Aid students who can't afford visa application fees.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-white/10 rounded-xl flex-shrink-0">
                  <Heart size={20} className="text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-base sm:text-lg">
                    Build Education
                  </h4>
                  <p className="text-white/50 text-xs sm:text-sm">
                    Fund webinars and global visa awareness programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="donate-animate bg-white/5 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/10 shadow-inner space-y-5">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-serif text-blue-300">
              Your Help Goes Further
            </h3>
            <p className="text-white/60 text-sm sm:text-base">
              Spring/Fall USA is driven by passionate volunteers. Every donation
              contributes directly to helping students achieve their dreams.
            </p>

            <div className="bg-white/5 p-4 sm:p-5 rounded-lg sm:rounded-xl border border-blue-500/20">
              <p className="text-white font-medium text-base sm:text-lg mb-1">
                Why Donate?
              </p>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                We're not just an organization — we're a movement. Your
                generosity helps amplify resources for thousands of students
                worldwide.
              </p>
            </div>

            {/* Added consistent vertical space above button */}
            <div className="pt-2">
              <a
                href={paypalDonationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-white text-black font-semibold text-sm sm:text-base py-3 rounded-3xl shadow-md hover:bg-white/90 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-white/40">
                  Donate via PayPal
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
