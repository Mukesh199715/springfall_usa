import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";

const CTASection = () => {
  const openTelegramChannel = () => {
    window.open("https://t.me/SpringfallUSA", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-black text-white font-[Poppins]">
      {/* Decorative blurred glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-[120px] z-0" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-[160px] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Hero Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
          <span className="text-white font-extrabold">Unlock </span>
          <span className="text-gray-300 font-light">Your U.S. Dream</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg sm:text-xl mt-4 mb-10 max-w-2xl mx-auto">
          Start your F-1 visa journey with free expert resources, tools, and
          community support. No fluff. Just results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-6">
          {/* Modern Pill Button with Arrow */}
          <Link to="/resources">
            <button className="group inline-flex items-center justify-between px-6 py-3 bg-white/70 text-black font-medium text-sm rounded-full hover:bg-white transition-all duration-300 shadow-md">
              <span className="mr-3">Access Free Resources</span>
              <span className="bg-black text-white rounded-full p-2">
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </span>
            </button>
          </Link>

          {/* Telegram Button */}
          <button
            onClick={openTelegramChannel}
            className="group inline-flex items-center justify-between px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <span className="mr-2">Join Our Telegram</span>
            <Send
              size={16}
              className="group-hover:-translate-y-1 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-sm text-gray-500">
          Join over{" "}
          <span className="text-white font-semibold">
            1,00,000+ international students
          </span>{" "}
          achieving success with Spring/Fall USA.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
