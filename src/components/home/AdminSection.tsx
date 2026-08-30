import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Crown, Shield, UserCheck } from "lucide-react";
import mukeshImg from "@/assets/images/mukesh.png";
import heluuImg from "@/assets/images/bipin.jpeg";
import manojImg from "@/assets/images/manoj.jpg";
import diwash from "@/assets/images/Diwash-Dahal.jpeg"

const admins = [
  {
    name: "Mukesh Pokhrel",
    role: "Founder",
    description:
      "Leading the vision for F-1 visa guidance and brand collaboration",
    image: mukeshImg,
    fallback: "MP",
    icon: Crown,
    color: "bg-yellow-500",
  },
   {
    name: "Bipin Pandey",
    role: "Founder",
    description: "Connecting universities with strategic marketing to drive growth.",
    image: heluuImg,
    fallback: "BP",
    icon: Crown,
    color: "bg-yellow-500",
  },
  {
    name: "Diwash Dahal",
    role: "Founder",
    description:
      "Leading the vision for F-1 visa guidance and brand collaboration",
    image: diwash,
    fallback: "MP",
    icon: Crown,
    color: "bg-yellow-500",
  },
 
  {
    name: "Manoj Dhakal",
    role: "Founder",
    description: "Managing operations and student support",
    image: manojImg,
    fallback: "MD",
    icon: Crown,
    color: "bg-yellow-500",
  },
];

const AdminSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("admin-section");
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      id="admin-section"
      className="relative py-24 bg-gradient-to-b from-blue-950 via-black to-blue-950 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/university-bg.jpg')] opacity-20 z-0" />
      <div className="absolute inset-0 " />

      <div className="relative z-10 container-custom mx-auto px-6">
        <div
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Meet Our <span className="text-visa-blue">Leadership Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Visionary minds guiding thousands of students toward their dream
            universities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-1 lg:gap-3 max-w-6xl mx-auto flex-wrap ">
          {admins.map((admin, index) => {
            const Icon = admin.icon;
            return (
              <div
                key={admin.name}
                className={`relative group rounded-xl p-8 border border-white/10 backdrop-blur-lg bg-white/5 shadow-2xl transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Avatar */}
                <div className="relative mx-auto mb-4 w-24 h-24">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-md">
                    <AvatarImage
                      src={admin.image}
                      alt={admin.name}
                      className="object-cover object-center"
                    />
                    <AvatarFallback>{admin.fallback}</AvatarFallback>
                  </Avatar>

                  {/* Icon Badge */}
                  <div
                    className={`absolute -bottom-2 -right-2 w-9 h-9 rounded-full flex items-center justify-center ${admin.color} text-white shadow-lg`}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white group-hover:text-visa-blue transition-colors duration-300">
                    {admin.name}
                  </h3>
                  <p className="text-visa-blue font-medium mb-2">
                    {admin.role}
                  </p>
                  <p className="text-sm text-gray-300">{admin.description}</p>
                </div>

                {/* Hover line */}
                {/* Hover underline */}
                <div className="mt-4 h-1 w-16 mx-auto origin-center bg-gradient-to-r from-visa-blue to-visa-navy rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        <div
          className={`text-center mt-16 text-gray-300 transition-opacity duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg">
            Questions? Our team is always ready to guide your F-1 visa journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
