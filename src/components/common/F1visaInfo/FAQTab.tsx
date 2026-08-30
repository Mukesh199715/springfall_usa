// FAQTab.jsx
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Adjust import path if needed

const FAQTab = ({ theme }) => {
  // Determine text and background classes based on theme
  const textColorPrimary = theme === "dark" ? "text-white" : "text-gray-200";
  const textColorSecondary =
    theme === "dark" ? "text-gray-300" : "text-gray-600";
  const cardBgClass = theme === "dark" ? "bg-gray-800/50" : "bg-gray-50";
  const borderColorClass =
    theme === "dark" ? "border-gray-700" : "border-gray-200";
  const accordionItemBorderClass =
    theme === "dark" ? "border-gray-700" : "border-gray-200";
  const accordionTriggerClass =
    theme === "dark"
      ? "text-white hover:text-blue-400"
      : "text-gray-900 hover:text-visa-blue";

  // FAQ Data
  const faqs = [
    {
      question: "How long can I stay in the U.S. with an F-1 visa?",
      answer:
        'An F-1 visa allows you to stay for the duration of your academic program plus an optional grace period. This is known as "Duration of Status" (D/S). After completing your studies, you typically have a 60-day grace period to either depart the U.S., transfer to another school, or apply for Optional Practical Training (OPT). If you pursue OPT, you can stay for up to 12 months for work experience related to your field of study, with a possible 24-month extension for STEM fields.',
    },
    {
      question: "Can I work while studying on an F-1 visa?",
      answer:
        "Yes, but with restrictions. F-1 students can work on-campus for up to 20 hours per week during the academic year and full-time during breaks. Off-campus employment is generally not permitted during the first academic year. After your first year, you may qualify for off-campus employment through Curricular Practical Training (CPT), Optional Practical Training (OPT), or in cases of severe economic hardship. All off-campus employment must be authorized by your school's Designated School Official (DSO) and/or USCIS.",
    },
    {
      question: "What happens if my F-1 visa application is denied?",
      answer:
        "If your F-1 visa application is denied, the consular officer should inform you of the reason for denial. Common reasons include insufficient financial proof, lack of strong ties to your home country, or incomplete documentation. You can reapply if you can address the reason for denial, but you'll need to pay the application fee again and submit a new application. There is no formal appeal process for visa denials, but you can request reconsideration if you have new information that addresses the reason for denial.",
    },
    {
      question: "Can my spouse and children come with me to the U.S.?",
      answer:
        "Yes, your spouse and unmarried children under 21 can accompany you to the U.S. on F-2 dependent visas. You'll need to provide proof of your relationship (marriage certificate, birth certificates) and demonstrate sufficient financial resources to support them. F-2 dependents are not permitted to work in the U.S. F-2 children can attend K-12 school, and F-2 spouses can engage in recreational or volunteer activities and part-time study.",
    },
    {
      question: "What if I want to change schools or programs?",
      answer:
        "If you want to transfer schools or change your program of study while on an F-1 visa, you must work with the Designated School Official (DSO) at both your current and new schools. Your current DSO will transfer your SEVIS record to the new school, and the new DSO will issue you a new I-20. As long as you maintain your F-1 status and continue with a full course of study, you generally do not need to apply for a new visa unless you travel outside the U.S. and your current visa has expired.",
    },
  ];

  return (
    <div className="space-y-10 md:space-y-12 w-full px-2 sm:px-4">
      {" "}
      {/* Increased spacing, full width, responsive padding */}
      {/* Intro Text - Centered for emphasis */}
      <div className="text-center max-w-3xl mx-auto px-2">
        <h2 className={`text-3xl md:text-4xl font-bold ${textColorPrimary}`}>
          Frequently Asked Questions
        </h2>
        <p className={`mt-4 text-lg md:text-xl ${textColorSecondary}`}>
          Find answers to common questions about the F-1 student visa.
        </p>
      </div>
      {/* Accordion - Modernized Styling */}
      <div
        className={`max-w-4xl mx-auto w-full rounded-2xl ${cardBgClass} ${borderColorClass} border shadow-sm p-4 md:p-6`}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className={`py-3 ${accordionItemBorderClass} ${
                index === 0 ? "border-t" : ""
              }`} // Add top border to first item for consistency
            >
              <AccordionTrigger
                className={`py-3 text-left text-base md:text-lg font-medium ${accordionTriggerClass} transition-colors duration-200`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className={`pb-3 pt-1 text-sm md:text-base ${textColorSecondary} transition-all duration-300 ease-in-out`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQTab;
