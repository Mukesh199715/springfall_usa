import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, MessageCircle, Globe, School, Heart, Smile, Star, Lightbulb } from "lucide-react";
import sabinaImg from "../assets/images/sabina.jpg";
import AboutCards from "@/components/common/AboutCards";
import AdminSection from "@/components/home/AdminSection";
import gsap from "gsap";

const AboutPage = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const founderRef = useRef(null);
  const valuesRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: statsRef.current, start: "top 80%" } }
      );

      gsap.fromTo(
        founderRef.current?.children,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: founderRef.current, start: "top 80%" } }
      );

      gsap.fromTo(
        valuesRef.current?.children,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, stagger: 0.15, duration: 0.7, ease: "back.out(1.1)", scrollTrigger: { trigger: valuesRef.current, start: "top 85%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Theme Toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const finalTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(finalTheme);
    document.documentElement.classList.toggle("dark", finalTheme === "dark");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main ref={sectionRef} className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="py-24 md:py-36 bg-gradient-to-b from-slate-950 via-black to-blue-950 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
          <div className="container-custom mx-auto px-4 relative z-10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              About <span className="text-blue-300">Spring/Fall USA</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed">
              Making the F-1 visa journey smoother, transparent, and stress-free for students around the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-blue-50 rounded-3xl lg:px-9 hover:bg-white/70 hover:text-black transition hover:shadow-lg">
                <Link to="/uniportal">Uniportal</Link>
              </Button>
              <Button asChild variant="outline" className=" border-white rounded-3xl hover:bg-white/10 hover:text-white bg-transparent transition">
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section ref={founderRef} className="py-24 md:py-32 bg-black">
          <div className="container-custom mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-500 max-w-xs transform hover:scale-105 transition duration-500">
                  <img src={sabinaImg} alt="Sabina GC - Founder" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">Sabina GC</h3>
                <p className="text-xl text-blue-300 mb-6">Founder | Visa Expert</p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Spring/Fall USA was founded in 2019 to help students apply to the USA for further studies. We’ve proudly supported{" "}
                  <span className="font-bold text-yellow-400">over 100,000 students</span> and are committed to empowering even more.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We created this platform to provide clear guidance, share authentic experiences, and build a supportive community for international students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section ref={statsRef} className="py-24 bg-gradient-to-r from-blue-950 to-black">
          <div className="container-custom mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
              Our <span className="text-blue-300">Impact</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { num: "100K+", label: "Students Helped", icon: Users, color: "blue" },
                { num: "5+", label: "Countries", icon: Globe, color: "green" },
                { num: "40,000+", label: "Visa Experiences", icon: MessageCircle, color: "purple" },
                { num: "3", label: "University Partners", icon: School, color: "yellow" },
              ].map((stat, i) => (
                <div key={i} className="stat-item bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 text-${stat.color}-400`} />
                  <div className="text-3xl font-bold text-white">{stat.num}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section ref={valuesRef} className="py-24 bg-black">
          <div className="container-custom mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
              Our <span className="text-blue-300">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Integrity", desc: "Honest, transparent, and ethical guidance.", icon: Award },
                { title: "Community", desc: "Supportive, inclusive, and global.", icon: Heart },
                { title: "Excellence", desc: "High-quality resources and coaching.", icon: Star },
                { title: "Empowerment", desc: "Equipping students with confidence.", icon: Lightbulb },
              ].map((value, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-500 transition-all duration-300">
                  <value.icon className="w-10 h-10 text-blue-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
          <div>
          <AdminSection />
        </div>

       


        {/* Embedded Components */}
        <div>
          <AboutCards />
        </div>

        
        {/* CTA */}
        <section className="py-24 bg-black">
          <div className="container-custom mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Whether you're starting your journey or want to help others, we’d love to have you.
            </p>
            <div className="flex flex-col items-center sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:text-black rounded-3xl hover:bg-white/80 transition ">
                <Link to="/register">Join Telegram Group</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className=" border-white rounded-3xl hover:bg-white/10 hover:text-white bg-transparent transition">
                <Link to="/visa-experiences">Browse Visa Experiences</Link>
              </Button>
            </div>
          </div>
        </section>

         {/* Testimonials */}
        <section className="py-24 bg-gradient-to-b from-black to-blue-950">
          <div className="container-custom mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <Smile className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">What Our Community Says</h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  quote: "Spring/Fall USA was my lifeline. The interview tips helped me get into UC Berkeley!",
                  author: "— Mei L., Taiwan",
                },
                {
                  quote: "I was overwhelmed until I found this community. Got my visa on the first try!",
                  author: "— Carlos G., Brazil",
                },
              ].map((item, i) => (
                <blockquote key={i} className="border-l-4 border-blue-500 pl-6 py-2 text-gray-200 italic leading-relaxed">
                  "{item.quote}"
                  <footer className="mt-3 font-semibold text-white">{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;