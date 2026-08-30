  import React, { useEffect, useState } from "react";
  import {
    ArrowRight,
    Loader2,
    ExternalLink,
    MessageCircle,
    MapPin,
    Calendar,
    User,
    Check,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Link } from "react-router-dom";
  import { VisaExperience } from "@/types/database";

  const ExperienceSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [experiences, setExperiences] = useState<VisaExperience[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      const section = document.getElementById("experience-section");
      if (section) {
        observer.observe(section);
      }

      return () => {
        if (section) {
          observer.unobserve(section);
        }
      };
    }, []);

    useEffect(() => {
      fetchExperiences();
    }, []);

    useEffect(() => {
      if (experiences.length === 0) return;
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [experiences.length]);

    const fetchExperiences = async () => {
      setIsLoading(true);
      setExperiences(defaultExperiences);
      setIsLoading(false);
    };

    const defaultExperiences: VisaExperience[] = [
      {
        id: "1",
        name: "Rahul S.",
        university: "University of Texas, Austin",
        consulate: "New Delhi, India",
        major: "Computer Science",
        interview_date: "2024-03-15",
        approved: "yes",
        experience:
          "The officer mainly asked about my financial situation and future plans. The interview lasted only 2 minutes, and I was approved!",
        created_at: "2024-03-20",
      },
      {
        id: "2",
        name: "Maria L.",
        university: "Boston University",
        consulate: "São Paulo, Brazil",
        major: "Economics",
        interview_date: "2024-02-22",
        approved: "yes",
        experience:
          "I was asked about my choice of university and how it aligned with my career goals. Spring/Fall USA's mock interview session was incredibly helpful.",
        created_at: "2024-02-27",
      },
      {
        id: "3",
        name: "Ahmed K.",
        university: "University of Washington",
        consulate: "Dubai, UAE",
        major: "Engineering",
        interview_date: "2024-03-05",
        approved: "yes",
        experience:
          "The officer focused on my ties to home and whether I'd return after graduation. Being prepared for these questions made all the difference.",
        created_at: "2024-03-10",
      },
    ];

    const displayExperiences =
      experiences.length > 0 ? experiences : defaultExperiences;

    const getRandomAvatar = (name: string) => {
      const hash = name
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return `https://i.pravatar.cc/150?u=${hash}`;
    };

    const formatDate = (dateString: string) => {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % displayExperiences.length);
    };

    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? displayExperiences.length - 1 : prevIndex - 1
      );
    };

    return (
      <section
        id="experience-section"
        className="py-16 px-4 bg-gradient-to-br from-[#0D0D0D] via-[#0D111A] to-[#000511] sm:py-20 md:py-24"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Heading */}
          <div
            className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle size={24} className="text-blue-400 sm:size-28" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Visa <span className="text-blue-500">Experience Stories</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full sm:w-24"></div>
            <p className="mt-4 text-white/60 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-lg font-light leading-relaxed">
              Real stories from successful students that can help you prepare
              better.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="animate-spin text-blue-400 mr-3" size={28} />
              <span className="text-white/70 text-sm sm:text-lg">
                Loading experiences...
              </span>
            </div>
          ) : (
            <div className="relative max-w-5xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden px-2 sm:px-4">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {displayExperiences.map((exp) => (
                    <div key={exp.id} className="w-full flex-shrink-0 px-4 py-2">
                      <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 transition-all hover:scale-[1.01] hover:shadow-2xl">
                        <div className="flex items-center mb-5 sm:mb-6">
                          <img
                            src={getRandomAvatar(exp.name)}
                            alt={exp.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-blue-500 object-cover flex-shrink-0"
                          />
                          <div className="ml-3 sm:ml-4">
                            <h3 className="text-lg sm:text-xl text-white font-semibold">
                              {exp.name}
                            </h3>
                            <p className="text-blue-400 flex items-center text-xs sm:text-sm mt-1">
                              <User size={14} className="mr-1" /> {exp.major}{" "}
                              Student
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 text-white/80">
                          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 sm:p-4">
                            <Calendar
                              size={16}
                              className="text-blue-400 flex-shrink-0"
                            />
                            <div>
                              <p className="text-xs sm:text-sm">Interview Date</p>
                              <p className="font-medium text-white">
                                {formatDate(exp.interview_date)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 sm:p-4">
                            <MapPin
                              size={16}
                              className="text-blue-400 flex-shrink-0"
                            />
                            <div>
                              <p className="text-xs sm:text-sm">Consulate</p>
                              <p className="font-medium text-white">
                                {exp.consulate}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 sm:mt-6 text-white/90 italic text-sm sm:text-base leading-relaxed">
                          "{exp.experience.substring(0, 180)}..."
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 space-y-3 sm:space-y-0">
                          <span className="text-xs font-medium text-green-400 flex items-center self-start">
                            <Check size={14} className="mr-1" /> APPROVED at{" "}
                            {exp.university}
                          </span>
                          <Link to={`/visa-experiences/${exp.id}`}>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-2 rounded-3xl w-full sm:w-auto">
                              Read Full Story{" "}
                              <ArrowRight size={14} className="ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2 sm:space-x-3">
                {displayExperiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-500 scale-110"
                        : "bg-white/20"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-transform z-10"
                aria-label="Previous slide"
              >
                <ArrowRight className="text-white rotate-180" size={18} />
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full transition-transform z-10"
                aria-label="Next slide"
              >
                <ArrowRight className="text-white" size={18} />
              </button>
            </div>
          )}

          {/* CTA Buttons */}
          <div
            className={`mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link to="/visa-experiences">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-white text-white bg-transparent hover:text-white hover:bg-white/30 px-6 py-2.5 rounded-3xl text-sm sm:text-base"
              >
                Read More Experiences <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/visa-experiences/share">
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-3xl text-sm sm:text-base">
                Share Your Experience <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  };

  export default ExperienceSection;
