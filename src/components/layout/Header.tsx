import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Send, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "../../../src/assets/images/logo/spring.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paypalDonationUrl =
    "https://www.paypal.com/donate/?hosted_button_id=5VXV68NC6TC9U";

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 1, name: "About Us", path: "/about" },
    { id: 2, name: "F-1 Visa Info", path: "/f1-visa-info" },
    { id: 3, name: "Interview Prep", path: "/interview-prep" },
    { id: 4, name: "Visa Experiences", path: "/visa-experiences" },
    { id: 5, name: "Resources", path: "/resources" },
    { id: 6, name: "Uniportal", path: "https://springfall-usa.vercel.app/" },
  ];

  const openDonation = () => {
    window.open(paypalDonationUrl, "_blank", "noopener,noreferrer");
  };



  return (
    <>
     
      <header
   
        className="fixed top-0 left-0 right-0 z-50 mt-5 bg-[#05051a]/80 backdrop-blur-sm px-6 md:mx-24 md:my-8 p-3 flex justify-between items-center rounded-full shadow-lg text-white transition-all duration-300"
      >
        <div className="flex items-center space-x-4 cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="Spring/Fall USA Logo" className="h-8 w-auto"  />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) =>
            item.path.startsWith("http") ? (
              <a
                key={item.id}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-white/80 hover:text-white transition-colors duration-300 group"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}}
                className="text-sm tracking-wide text-white/80 hover:text-white transition-colors duration-300 group"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
     
          <Button
            className="bg-white text-black text-xs hover:bg-white transition-all duration-300 rounded-full px-4 py-2 flex items-center"
            onClick={openDonation}
          >
            <Heart size={16} className="mr-" />
            Support Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-gradient-to-b from-black to-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2  hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 pb-6 flex justify-center">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>

          {/* Mobile Nav */}
          <nav className="px-6 space-y-1">
            {navItems.map((item) => {
              if (item.path.startsWith("http")) {
                return (
                  <a
                    key={item.id}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-blue-300 font-medium py-3 px-3 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="block text-white hover:text-blue-300 font-medium py-3 px-3 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="p-6 pt-4 space-y-4">
            <Link to="/community" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-white text-black text-xs hover:shadow-lg hover:shadow-white/30 transition-all duration-300 rounded-full py-3 flex items-center justify-center">
                <Send size={16} className="mr-2" />
                Get Free Guidance
              </Button>
            </Link>
            <Button
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs hover:from-red-400 hover:to-pink-400 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 rounded-full py-3 flex items-center justify-center"
              onClick={() => {
                openDonation();
                setIsMenuOpen(false);
              }}
            >
              <Heart size={16} className="mr-2" />
              Support Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;