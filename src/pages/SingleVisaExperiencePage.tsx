import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Calendar,
  MapPin,
  BookOpen,
  ThumbsUp,
  Loader2,
  Share,
} from "lucide-react";
import { toast } from "sonner";
import { VisaExperience } from "@/types/database";
import { experiences as staticExperiences } from "../data/experiences";

const SingleVisaExperiencePage = () => {
  const { id } = useParams<{ id: string }>();
  const [experience, setExperience] = useState<VisaExperience | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedExperiences, setRelatedExperiences] = useState<
    VisaExperience[]
  >([]);

  useEffect(() => {
    if (id) {
      fetchExperience(id);
    }
  }, [id]);

  const fetchExperience = async (experienceId: string) => {
    setIsLoading(true);
    const found =
      staticExperiences.find((exp) => exp.id === experienceId) || null;
    setExperience(found);
    setIsLoading(false);
  };

  const fetchRelatedExperiences = async (
    consulate: string,
    currentId: string
  ) => {
    try {
      setRelatedExperiences([]);
    } catch (error) {
      console.error("Error fetching related experiences:", error);
    }
  };

  const getApprovalStatusColor = (status: string) => {
    switch (status) {
      case "yes":
        return "text-emerald-400 bg-emerald-900/30 border-emerald-700/40";
      case "no":
        return "text-red-400 bg-red-900/30 border-red-700/40";
      case "administrative":
        return "text-amber-400 bg-amber-900/30 border-amber-700/40";
      default:
        return "text-gray-400 bg-gray-800 border-gray-700";
    }
  };

  const getApprovalStatusLabel = (status: string) => {
    switch (status) {
      case "yes":
        return "✅ Approved";
      case "no":
        return "❌ Denied";
      case "administrative":
        return "⏳ Administrative Processing";
      default:
        return "❓ Unknown";
    }
  };

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
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-grow pt-28">
        <div className="container-custom mx-auto py-12 px-4">
          <div className="mb-8">
            <Link to="/visa-experiences">
              <Button
                variant="ghost"
                className="text-blue-400 hover:bg-blue-900/30 pl-0 flex items-center gap-1"
              >
                <ChevronLeft size={18} />
                Back to all experiences
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-blue-500 mr-3" size={24} />
              <span className="text-gray-400">
                Loading experience details...
              </span>
            </div>
          ) : experience ? (
            <>
              <div className="bg-slate-900/70 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden mb-10 backdrop-blur-sm">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="flex items-center">
                      <img
                        src={getRandomAvatar(experience.name)}
                        alt={experience.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-500/40 shadow-lg"
                      />
                      <div className="ml-5">
                        <h1 className="text-2xl font-bold text-blue-100">
                          {experience.name}
                        </h1>
                        <p className="text-blue-300 font-medium">
                          {experience.university}
                        </p>
                        <p className="text-gray-400">{experience.major}</p>
                      </div>
                    </div>

                    <div>
                      <span
                        className={`text-sm px-5 py-2 rounded-full font-semibold border ${getApprovalStatusColor(
                          experience.approved
                        )}`}
                      >
                        {getApprovalStatusLabel(experience.approved)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center text-sm text-gray-300 bg-gray-900/70 px-4 py-2 rounded-full border border-gray-700">
                      <MapPin size={14} className="mr-2 text-blue-400" />
                      {experience.consulate}
                    </div>
                    <div className="flex items-center text-sm text-gray-300 bg-gray-900/70 px-4 py-2 rounded-full border border-gray-700">
                      <Calendar size={14} className="mr-2 text-blue-400" />
                      Interview on {formatDate(experience.interview_date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-300 bg-gray-900/70 px-4 py-2 rounded-full border border-gray-700">
                      <BookOpen size={14} className="mr-2 text-blue-400" />
                      {experience.major}
                    </div>
                  </div>

                  <div className="bg-slate-900/50 p-7 rounded-xl mb-8 border border-gray-700/50">
                    <h2 className="text-2xl font-semibold text-blue-200 mb-5">
                      Visa Interview Experience
                    </h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      {experience.experience
                        .split("\n")
                        .map((paragraph, idx) => (
                          <p key={idx} className="mb-3">
                            {paragraph.trim() ? paragraph : <br />}
                          </p>
                        ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 border-t border-gray-800 pt-6">
                    <span>Shared on {formatDate(experience.created_at)}</span>
                    <div className="flex gap-4 mt-3 sm:mt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-400 hover:text-blue-200 hover:bg-blue-900/30 flex items-center gap-1"
                      >
                        <Share size={14} />
                        Share
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-400 hover:text-green-200 hover:bg-green-900/30 flex items-center gap-1"
                      >
                        <ThumbsUp size={14} />
                        Helpful
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {relatedExperiences.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-blue-100 mb-6">
                    More Experiences from {experience.consulate}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedExperiences.map((exp) => (
                      <div
                        key={exp.id}
                        className="bg-slate-900/70 rounded-xl shadow-lg border border-gray-800 overflow-hidden hover:border-blue-700/60 transform transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="p-5">
                          <div className="flex items-center mb-3">
                            <img
                              src={getRandomAvatar(exp.name)}
                              alt={exp.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/40"
                            />
                            <div className="ml-3">
                              <h3 className="font-semibold text-blue-200 text-sm">
                                {exp.name}
                              </h3>
                              <p className="text-xs text-gray-400">
                                {exp.university}
                              </p>
                            </div>
                          </div>

                          <p className="text-gray-300 text-sm line-clamp-3 mb-3">
                            "{exp.experience.substring(0, 120)}..."
                          </p>

                          <Link to={`/visa-experiences/${exp.id}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-400 hover:text-blue-200 w-full border border-blue-700/40 hover:bg-blue-900/30"
                            >
                              Read full experience
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-red-900/30">
              <h2 className="text-2xl font-medium text-red-300 mb-3">
                Experience not found
              </h2>
              <p className="text-gray-400 mb-6">
                The visa experience you are looking for does not exist or has
                been removed.
              </p>
              <Link to="/visa-experiences">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  View All Experiences
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SingleVisaExperiencePage;
