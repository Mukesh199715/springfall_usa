// pages/ResourcesPage.jsx or similar
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Youtube, Link as LinkIcon, ExternalLink } from "lucide-react";
import { useRef, useEffect } from "react";
// Import GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Optional: for scroll-based animations

// Register ScrollTrigger if you plan to use it
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ResourcesPage = () => {
  // Refs for elements to animate
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroAccentRef = useRef(null);
  const videoSectionRef = useRef(null);
  const videoSectionTitleRef = useRef(null);
  const videoSectionSubtitleRef = useRef(null);
  const videoCardsRef = useRef([]);
  const linksSectionRef = useRef(null);
  const linksSectionTitleRef = useRef(null);
  const linksSectionSubtitleRef = useRef(null);
  const linkCardsRef = useRef([]);

  useEffect(() => {
    // Ensure animations only run on the client side
    if (typeof window === "undefined") return;

    // Create a master timeline for initial page load animations
    const masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // --- Hero Section Animations ---
    masterTl.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      0.2 // Start slightly after page load
    );
    masterTl.fromTo(
      heroSubtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "<0.3" // Start 0.3 seconds after the previous animation starts
    );
    masterTl.fromTo(
      heroAccentRef.current,
      { width: 0, opacity: 0 },
      { width: 96, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
      "<0.2"
    );

    // --- Video Section Entrance Animation ---
    gsap.fromTo(
      videoSectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top 80%", // Start animation when top of section hits 80% of viewport height
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );

    // --- Video Section Title/Subtitle Animation ---
    gsap.fromTo(
      [videoSectionTitleRef.current, videoSectionSubtitleRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // --- Video Cards Staggered Entrance ---
    gsap.fromTo(
      videoCardsRef.current,
      { opacity: 0, y: 30, scale: 0.95 }, // Start slightly scaled down
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15, // Delay between each card animation
        ease: "back.out(1.4)", // Slight bounce effect
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // --- Official Links Section Entrance Animation ---
    gsap.fromTo(
      linksSectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: linksSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // --- Official Links Section Title/Subtitle Animation ---
    gsap.fromTo(
      [linksSectionTitleRef.current, linksSectionSubtitleRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: linksSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // --- Official Links Cards Staggered Entrance ---
    gsap.fromTo(
      linkCardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1, // Faster stagger for more items
        ease: "power2.out",
        scrollTrigger: {
          trigger: linksSectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // --- Optional: Add subtle hover animations to cards (using standard CSS is often better for perf, but here's a GSAP way) ---
    // This part adds a subtle scale and shadow effect on hover for video cards
    videoCardsRef.current.forEach((card) => {
      if (card) {
        // Check if ref is attached
        const tl = gsap.timeline({ paused: true });
        tl.to(card, {
          scale: 1.02, // Slight scale up
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // Enhanced shadow
          duration: 0.3,
          ease: "power2.out",
        });
        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      }
    });

    // Cleanup function (optional but good practice for ScrollTrigger)
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const youtubeVideos = [
    {
      id: "XlSjpBUWZk0",
      title: "How to Transfer SEVIS from One University to Another",
      description:
        "Learn the step-by-step process to transfer your SEVIS record when changing universities in the USA.",
    },
    {
      id: "OE237ZlZ0Qs",
      title: "Documents Required at F1 Visa Interview in Nepal",
      description:
        "Comprehensive guide to the documents you need to prepare for your F-1 visa interview at the US Embassy in Nepal.",
    },
  ];

  const officialLinks = [
    {
      name: "U.S. Department of State - Student Visa",
      url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
      description:
        "Official information on F and M student visas from the U.S. Department of State.",
    },
    {
      name: "SEVP Portal",
      url: "https://sevp.ice.gov/opt/",
      description:
        "The Student and Exchange Visitor Program (SEVP) Portal for OPT students.",
    },
    {
      name: "USCIS - Students and Exchange Visitors",
      url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors",
      description:
        "Information from U.S. Citizenship and Immigration Services on studying and working in the U.S.",
    },
    {
      name: "Study in the States",
      url: "https://studyinthestates.dhs.gov/",
      description:
        "Department of Homeland Security resource for international students.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow pt-24 sm:pt-28">
        {/* Hero Section - Modernized with GSAP refs */}
        <section
          ref={heroRef}
          className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black shadow-black shadow-inner"
        >
          {/* Decorative Background Elements (Keep your existing blob styles) */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container-custom mx-auto relative z-10 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                ref={heroTitleRef}
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
              >
                F-1 Visa <span className="text-blue-400">Resources</span>
              </h1>
              <p
                ref={heroSubtitleRef}
                className="text-lg md:text-xl text-gray-300 mb-8"
              >
                Your curated collection of essential guides, videos, and
                official links for the F-1 visa journey.
              </p>
              <div className="flex justify-center">
                <div
                  ref={heroAccentRef}
                  className="w-0 h-1 bg-blue-500 rounded-full opacity-0"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section - Enhanced Cards with GSAP refs */}
        <section
          ref={videoSectionRef}
          className="py-16 bg-gradient-to-b from-black to-gray-900/50"
        >
          <div className="container-custom mx-auto px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2
                ref={videoSectionTitleRef}
                className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 flex items-center justify-center"
              >
                <Youtube
                  className="mr-3 text-red-500 flex-shrink-0"
                  size={32}
                />
                Educational Videos
              </h2>
              <p
                ref={videoSectionSubtitleRef}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                Watch these informative videos to better understand the F-1 visa
                process and student life in the USA.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {youtubeVideos.map((video, index) => (
                <div
                  key={video.id}
                  ref={(el) => (videoCardsRef.current[index] = el)} // Assign ref to array
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-700 transition-shadow duration-300 hover:shadow-xl flex flex-col h-full" // Simplified hover for GSAP
                >
                  <div className="relative pb-[56.25%] h-0 overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer" // Good security practice
                    ></iframe>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">
                      {video.description}
                    </p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-blue-400 hover:text-blue-300 font-medium flex items-center text-sm group"
                    >
                      Watch on YouTube
                      <ExternalLink
                        size={14}
                        className="ml-1 transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Official Links Section - Modern Cards with GSAP refs */}
        <section
          ref={linksSectionRef}
          className="py-16 bg-gradient-to-b from-gray-900/50 to-black"
        >
          <div className="container-custom mx-auto px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2
                ref={linksSectionTitleRef}
                className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 flex items-center justify-center"
              >
                <LinkIcon
                  className="mr-3 text-blue-400 flex-shrink-0"
                  size={32}
                />
                Official U.S. Government Resources
              </h2>
              <p
                ref={linksSectionSubtitleRef}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                Access official information directly from U.S. government
                websites for accurate and up-to-date guidance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {officialLinks.map((link, index) => (
                <div
                  key={link.url}
                  ref={(el) => (linkCardsRef.current[index] = el)} // Assign ref to array
                  className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-700 transition-shadow duration-300 hover:shadow-md flex flex-col h-full"
                >
                  <div className="mb-4">
                    <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                      <LinkIcon className="text-blue-400" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {link.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {link.description}
                  </p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full bg-white/90 backdrop-blur-sm text-black rounded-3xl 
 hover:bg-white hover:shadow-lg 
 transition-all duration-300 ease-in-out 
 group"
                    >
                      Visit Website
                      <ExternalLink
                        size={14}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
