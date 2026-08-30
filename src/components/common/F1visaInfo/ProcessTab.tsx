// ProcessTab.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust import path
import { Download, ArrowRight, FileText, CreditCard, UserCheck, Calendar, FolderOpen, Users, CheckCircle } from "lucide-react"; // Import additional icons

const ProcessTab = ({ theme }) => {
  // Determine text and background classes based on theme
  const textColorPrimary = theme === "dark" ? "text-white" : "text-gray-200";
  const textColorSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const cardBgClass = theme === "dark" ? "bg-gray-800/50" : "bg-gray-50";
  const borderColorClass = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const timelineBorderColor = theme === "dark" ? "border-blue-700" : "border-visa-blue";
  const timelineDotColor = theme === "dark" ? "bg-blue-600" : "bg-visa-blue";
  const infoBoxClass = theme === "dark" ? "bg-blue-900/20 border border-blue-800/50" : "bg-blue-50 border border-blue-100";

  // Data for timeline steps
  const steps = [
    {
      title: "Step 1: University Acceptance",
      description: "Apply to and receive acceptance from a SEVP-approved U.S. educational institution. Once accepted, the school will issue you a Form I-20, \"Certificate of Eligibility for Nonimmigrant Student Status.\"",
      icon: FileText,
    },
    {
      title: "Step 2: Pay SEVIS Fee",
      description: "Pay the SEVIS I-901 fee ($350 for F-1 students) on the FMJfee.com website. Keep the payment receipt as you'll need it for your visa application and interview.",
      icon: CreditCard,
    },
    {
      title: "Step 3: Complete DS-160 Form",
      description: "Fill out the DS-160 form online (Online Nonimmigrant Visa Application). After completing the form, print the confirmation page with the barcode to bring to your visa interview.",
      icon: UserCheck, // Could also use FileText
    },
    {
      title: "Step 4: Pay Visa Application Fee",
      description: "Pay the visa application fee (MRV fee), which is currently $160 for F-1 visas. The payment method varies by country, so check your local U.S. Embassy or Consulate website for specific instructions.",
      icon: CreditCard, // Could also use DollarSign
    },
    {
      title: "Step 5: Schedule Visa Interview",
      description: "Schedule your visa interview at the U.S. Embassy or Consulate in your country. Wait times for interview appointments vary by location and season, so it's important to schedule well in advance.",
      icon: Calendar,
    },
    {
      title: "Step 6: Prepare Documents",
      description: "Gather all required documents for your interview, including your Form I-20, DS-160 confirmation, passport, photos, financial evidence, academic records, and proof of ties to your home country.",
      icon: FolderOpen,
    },
    {
      title: "Step 7: Attend Visa Interview",
      description: "Attend your scheduled interview at the U.S. Embassy or Consulate. Be prepared to answer questions about your educational plans, financial situation, and ties to your home country.",
      icon: Users, // Could also use User or MessageCircle
    },
    {
      title: "Step 8: Receive Visa Decision",
      description: "If approved, your passport with the F-1 visa will typically be returned to you within a few days. Some applications may require additional administrative processing, which can take several weeks.",
      icon: CheckCircle, // Could also use Mail or Award
    },
  ];

  return (
    <div className="space-y-10 md:space-y-12 w-full px-2 sm:px-4"> {/* Increased spacing, full width, responsive padding */}
      {/* Intro Text - Centered for emphasis */}
      <div className="text-center max-w-3xl mx-auto px-2">
        <h2 className={`text-3xl md:text-4xl font-bold ${textColorPrimary}`}>
          F-1 Visa Application Process
        </h2>
        <p className={`mt-4 text-lg md:text-xl ${textColorSecondary}`}>
          Navigate your path to studying in the U.S. with this step-by-step guide.
        </p>
      </div>

      {/* Timeline Steps - Modernized Styling */}
      <div className="relative max-w-4xl mx-auto px-2">
        {/* Vertical line - Adjusted positioning and color */}
        <div className={`absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 ${timelineBorderColor} transform -translate-x-1/2`}></div>

        <div className="space-y-10"> {/* Space between timeline items */}
          {steps.map((step, index) => (
            <div key={index} className="relative pl-10 sm:pl-14"> {/* Increased left padding for icon */}
              {/* Timeline Dot - Adjusted size and positioning */}
              <div className={`absolute left-0 top-1 w-8 h-8 rounded-full ${timelineDotColor} flex items-center justify-center`}>
                <step.icon size={18} className="text-white" /> {/* Icon inside the dot */}
              </div>
              
              {/* Content Card - Modernized card styling */}
              <div className={`p-5 rounded-xl ${cardBgClass} ${borderColorClass} shadow-sm transition-all duration-300 hover:shadow-md`}>
                <h4 className={`text-lg md:text-xl font-semibold ${theme === "dark" ? "text-blue-400" : "text-visa-blue"}`}>
                  {step.title}
                </h4>
                <p className={`mt-2 text-sm md:text-base ${textColorSecondary}`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Considerations - Modernized Styling */}
      <div className={`max-w-4xl mx-auto rounded-2xl p-6 ${infoBoxClass} w-full px-4`}>
        <h3 className={`text-2xl font-bold mb-5 ${theme === "dark" ? "text-blue-400" : "text-visa-blue"}`}>
          Important Timeline Considerations
        </h3>
        <ul className="space-y-3">
          {[ // Data for considerations
            "You can apply for your F-1 visa up to 120 days before your program start date.",
            "You can enter the U.S. no earlier than 30 days before your program start date.",
            "Schedule your interview as early as possible, as wait times can be long in some locations.",
            "If administrative processing is required, it can add several weeks to your timeline. Plan accordingly.",
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <ArrowRight size={18} className={`mt-1 flex-shrink-0 ${theme === "dark" ? "text-blue-400" : "text-visa-blue"}`} />
              <span className={`text-sm md:text-base ${textColorSecondary}`}>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Buttons - Centered and responsive */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        <Link to="/resources">
          <Button
            className={`px-5 py-2.5 text-sm md:text-base rounded-lg flex items-center ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-visa-blue hover:bg-visa-navy text-white"
            } transition-colors duration-300`}
          >
            <Download size={18} className="mr-2" />
            Download Process Checklist
          </Button>
        </Link>
        <Link to="/visa-experiences">
          <Button
            variant={theme === "dark" ? "outline" : "default"} // Adjust variant based on theme if needed
            className={`px-5 py-2.5 text-sm md:text-base rounded-lg ${
              theme === "dark"
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100" // Example light mode outline style
            } transition-colors duration-300`}
          >
            Read Application Experiences
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProcessTab;