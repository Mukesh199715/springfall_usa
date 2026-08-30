// RequirementsTab.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Ensure your Card components support these props
import { Building, Briefcase, HelpCircle, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust import path

const RequirementsTab = ({ theme }) => {
  // Determine text and background classes based on theme
  const textColorPrimary = " text-white";
  const textColorSecnd2 = "text-gray-900";
  const textColorSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const cardBgClass = theme === "dark" ? "bg-gray-800/50" : "bg-gray-50";
  const borderColorClass = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const buttonVariant = theme === "dark" ? "outline" : "default"; // Optional: Adjust button style based on theme

  return (
    <div className="space-y-10 md:space-y-12 w-full">
      {" "}
      {/* Increased spacing, full width */}
      {/* Intro Text - Centered for emphasis */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold ${textColorPrimary}`}>
          F-1 Visa Requirements
        </h2>
        <p className={`mt-4 text-lg md:text-xl ${textColorSecondary}`}>
          Meet the essential criteria to qualify for your U.S. student visa.
        </p>
      </div>
      {/* Requirements Grid - Improved Card Styling */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 w-full max-w-7xl mx-auto">
        {" "}
        {/* Adjusted breakpoint and gap */}
        {/* Basic Eligibility Card */}
        <Card
          className={`flex flex-col ${cardBgClass} ${borderColorClass} transition-all duration-300 hover:shadow-md`}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <FileText
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
              </div>
              <CardTitle className="text-xl md:text-2xl text-visa-blue dark:text-blue-400">
                Basic Eligibility
              </CardTitle>
            </div>
            <CardDescription className={textColorSecondary}>
              Core requirements for all F-1 applicants
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-5">
            {" "}
            {/* Increased spacing */}
            {[
              {
                title: "1. SEVP School Acceptance",
                description:
                  "Gain admission to a Student and Exchange Visitor Program (SEVP)-approved institution and receive your Form I-20.",
                icon: FileText,
              },
              {
                title: "2. Financial Proof",
                description:
                  "Demonstrate sufficient funds to cover tuition and living expenses for the first year, with evidence of funding for subsequent years.",
                icon: Briefcase,
              },
              {
                title: "3. Non-Immigrant Intent",
                description:
                  "Show strong ties to your home country and a clear intention to return after completing your studies.",
                icon: Building,
              },
              {
                title: "4. English Proficiency",
                description:
                  "Meet the institution's English language requirements, often through TOEFL, IELTS, or internal assessments.",
                icon: HelpCircle, // Could use a dedicated language icon if available
              },
            ].map((req, index) => (
              <div key={index} className="flex items-start gap-4">
                {" "}
                {/* Consistent item structure */}
                <div className="mt-1 flex-shrink-0">
                  <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
                    <req.icon
                      size={16}
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }
                    />
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold ${textColorSecnd2}`}>
                    {req.title}
                  </h4>
                  <p className={`mt-1 text-sm ${textColorSecondary}`}>
                    {req.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Additional Requirements Card */}
        <Card
          className={`flex flex-col ${cardBgClass} ${borderColorClass} transition-all duration-300 hover:shadow-md`}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <Calendar
                  className="text-amber-600 dark:text-amber-400"
                  size={20}
                />
              </div>
              <CardTitle className="text-xl md:text-2xl text-visa-blue dark:text-blue-400">
                Additional Criteria
              </CardTitle>
            </div>
            <CardDescription className={textColorSecondary}>
              Further conditions for a successful application
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-5">
            {[
              {
                title: "5. Full-Time Study Commitment",
                description:
                  "Enroll in and maintain a full course of study as defined by your institution and listed on your I-20.",
                icon: Calendar,
              },
              {
                title: "6. Fee Payment",
                description:
                  "Pay the mandatory SEVIS I-901 fee and the non-refundable visa application fee.",
                icon: FileText, // Could use a dedicated fee/money icon if available
              },
              {
                title: "7. Background Check",
                description:
                  "Pass security and background clearances. A criminal history may lead to visa denial.",
                icon: HelpCircle, // Could use a dedicated security/icon if available
              },
              {
                title: "8. Medical Standards",
                description:
                  "Complete any required vaccinations or medical examinations based on your origin and program.",
                icon: HelpCircle, // Could use a dedicated medical icon if available
              },
            ].map((req, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
                    <req.icon
                      size={16}
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }
                    />
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold ${textColorSecnd2}`}>
                    {req.title}
                  </h4>
                  <p className={`mt-1 text-sm ${textColorSecondary}`}>
                    {req.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      {/* Proof of Ties Section - Modernized Styling */}
      <div
        className={`px-4 py-8 rounded-2xl ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-800 to-gray-900/60 border border-gray-700"
            : "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
        } w-full max-w-7xl mx-auto`}
      >
        <div className="max-w-4xl mx-auto">
          <h3
            className={`text-2xl md:text-3xl font-bold text-center mb-6 ${
              theme === "dark" ? "text-blue-400" : "text-visa-blue"
            }`}
          >
            Demonstrating Strong Ties to Your Home Country
          </h3>
          <p
            className={`text-center mb-8 max-w-3xl mx-auto ${textColorSecondary}`}
          >
            Convincing consular officers of your intent to return home is
            crucial. Here are key types of evidence:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {" "}
            {/* Responsive grid for ties */}
            {[
              {
                icon: Building,
                title: "Property Ownership",
                desc: "Deeds or titles to property in your home country.",
              },
              {
                icon: Briefcase,
                title: "Employment Prospects",
                desc: "Job offers or clear career opportunities awaiting you.",
              },
              {
                icon: HelpCircle,
                title: "Family Ties",
                desc: "Close family members residing in your home country.",
              },
              {
                icon: Calendar,
                title: "Future Plans",
                desc: "Concrete plans detailing how your US education benefits your home career.",
              },
            ].map((tie, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm"
              >
                {" "}
                {/* Item styling */}
                <div className="mt-1 flex-shrink-0">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                    <tie.icon
                      size={20}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold ${textColorSecnd2}`}>
                    {tie.title}
                  </h4>
                  <p className={`mt-1 text-sm ${textColorSecondary}`}>
                    {tie.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Button - Centered */}
      <div className="flex justify-center px-4">
        <Link to="/resources">
          <Button
            className={`px-6 py-3 text-base font-medium rounded-lg ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-visa-blue hover:bg-visa-navy text-white"
            } transition-colors duration-300`}
          >
            Access Detailed Requirement Checklists
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RequirementsTab;