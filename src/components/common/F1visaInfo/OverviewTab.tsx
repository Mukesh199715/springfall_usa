// OverviewTab.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Ensure your Card components support these props and styling
import {
  GraduationCap,
  CalendarCheck,
  CreditCard,
  ArrowRight,
  Clock,
} from "lucide-react";

const OverviewTab = ({ theme }) => {
  // Data for the cards to make it easier to manage
  const keyBenefits = [
    {
      icon: GraduationCap,
      text: "Study at accredited U.S. institutions",
      colorClass:
        "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400",
    },
    {
      icon: ArrowRight,
      text: "Opportunity for on-campus employment",
      colorClass:
        "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400",
    },
    {
      icon: CalendarCheck,
      text: "CPT and OPT work opportunities",
      colorClass:
        "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400",
    },
    {
      icon: Clock,
      text: "Possible STEM extension for eligible fields",
      colorClass:
        "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400",
    },
  ];

  const importantDeadlines = [
    {
      icon: CalendarCheck,
      text: "Apply up to 120 days before program start",
      colorClass:
        "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
    },
    {
      icon: Clock,
      text: "Enter the U.S. up to 30 days before program",
      colorClass:
        "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
    },
    {
      icon: CalendarCheck,
      text: "SEVIS registration within 30 days of program start",
      colorClass:
        "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
    },
    {
      icon: Clock,
      text: "OPT application deadline: 90 days before graduation",
      colorClass:
        "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
    },
  ];

  const associatedCosts = [
    {
      icon: CreditCard,
      text: "SEVIS Fee: $350 (I-901)",
      colorClass:
        "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
    },
    {
      icon: CreditCard,
      text: "Visa Application Fee: $160 (MRV fee)",
      colorClass:
        "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
    },
    {
      icon: CreditCard,
      text: "Visa Issuance Fee: Varies by country",
      colorClass:
        "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
    },
    {
      icon: CreditCard,
      text: "Biometric Fee: If applicable",
      colorClass:
        "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
    },
  ];

  // Determine text and background classes based on theme
  const textColorPrimary = theme === "dark" ? "text-white" : "text-white";
  const textColorSecondary =
    theme === "dark" ? "text-gray-300" : "text-gray-800";
  const cardBgClass = theme === "dark" ? "bg-gray-800/50" : "bg-gray-50";
  const borderColorClass =
    theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div className="space-y-10 md:space-y-12 w-full">
      {/* Hero Section */}
      <div className="text-center space-y-4 px-4">
        <h2 className={`text-3xl md:text-4xl font-bold ${textColorPrimary}`}>
          Unlock Your U.S. Academic Journey
        </h2>
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto ${textColorPrimary}`}
        >
          The F-1 Student Visa is your gateway to world-class education in the
          United States.
        </p>
        <div
          className={`h-1 w-20 md:w-24 mx-auto rounded-full ${
            theme === "dark" ? "bg-blue-500" : "bg-visa-blue"
          }`}
        ></div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        <p className={textColorPrimary}>
          The F-1 visa is a non-immigrant visa that allows international
          students to enter the United States for academic studies at accredited
          universities, colleges, high schools, language programs, and other
          academic institutions. It is the most common type of student visa
          issued by U.S. embassies and consulates.
        </p>
        <p className={textColorPrimary}>
          F-1 visa holders can study full-time in the U.S. and may also be
          eligible for certain types of employment, including on-campus
          employment, Curricular Practical Training (CPT), and Optional
          Practical Training (OPT) after completing their studies.
        </p>
        <p className={textColorPrimary}>
          The visa is typically valid for the duration of your academic program,
          known as "Duration of Status" (D/S), as long as you maintain full-time
          student status and comply with all visa regulations.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 w-full max-w-7xl mx-auto">
        {/* Key Benefits Card */}
        <Card
          className={`flex flex-col ${cardBgClass} ${borderColorClass} transition-all duration-300 hover:shadow-md`}
        >
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <GraduationCap className="text-green-500" size={20} />
              Key Benefits
            </CardTitle>
            <CardDescription className={textColorSecondary}>
              Advantages of the F-1 student visa
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-3">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-full flex-shrink-0 ${benefit.colorClass}`}
                >
                  <benefit.icon size={16} />
                </div>
                <span className={textColorSecondary}>{benefit.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Important Deadlines Card */}
        <Card
          className={`flex flex-col ${cardBgClass} ${borderColorClass} transition-all duration-300 hover:shadow-md`}
        >
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <CalendarCheck className="text-amber-500" size={20} />
              Important Deadlines
            </CardTitle>
            <CardDescription className={textColorSecondary}>
              Timeline for F-1 visa application
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-3">
            {importantDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-full flex-shrink-0 ${deadline.colorClass}`}
                >
                  <deadline.icon size={16} />
                </div>
                <span className={textColorSecondary}>{deadline.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Associated Costs Card */}
        <Card
          className={`flex flex-col ${cardBgClass} ${borderColorClass} transition-all duration-300 hover:shadow-md`}
        >
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <CreditCard className="text-blue-500" size={20} />
              Associated Costs
            </CardTitle>
            <CardDescription className={textColorSecondary}>
              Fees related to the F-1 visa process
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-3">
            {associatedCosts.map((cost, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-full flex-shrink-0 ${cost.colorClass}`}
                >
                  <cost.icon size={16} />
                </div>
                <span className={textColorSecondary}>{cost.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
