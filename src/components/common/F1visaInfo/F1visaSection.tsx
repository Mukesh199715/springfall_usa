// F1visaSection.jsx
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FileText,
  AlertTriangle,
  Calendar,
  Briefcase,
  Compass,
  HelpCircle,
} from "lucide-react";

import OverviewTab from "./OverviewTab";
import RequirementsTab from "./RequirementsTab";
import ProcessTab from "./ProcessTab";
import DocumentsTab from "./DocumentsTab";

import InterviewTab from "./DocumentsTab"; 
import FAQTab from "./FAQTab";

const F1visaSection = ({ theme }) => {
  return (
    <section className="text-white py-20 px-4 ">
      {" "}
      {/* Removed overflow-hidden from main section */}
      {/* Centered Heading */}
      <div className="max-w-3xl mx-auto text-center space-y-5">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          F‑1 Student Visa <span className="text-blue-400">Information</span>
        </h1>
        <p className="text-lg text-gray-300">
          Comprehensive guide to F‑1 student visa: eligibility, documents,
          process, interview tips, and FAQs.
        </p>
      </div>
      {/* Tabs Section */}
      <div className="mt-12 max-w-6xl mx-auto w-full px-2 sm:px-4">
        {" "}
        {/* Adjusted padding */}
        <Tabs defaultValue="overview" className="w-full">
          {/* Responsive Tab Triggers - Key Changes Here */}
          <div className="mb-8 overflow-x-auto pb-2 -mx-2 sm:-mx-4 px-2 sm:px-4">
            {" "}
            {/* Scrollable container for tabs */}
            <TabsList className="flex flex-nowrap justify-center gap-1 sm:gap-2 bg-gray-800/80 rounded-lg p-1 min-w-max backdrop-blur-sm">
              {" "}
              {/* Updated classes for responsiveness and appearance */}
              <TabsTrigger
                value="overview"
                className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-gray-700 transition text-xs sm:text-sm whitespace-nowrap flex-shrink-0" // Adjusted padding, font size, ensured no wrapping
              >
                <FileText size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />{" "}
                {/* Responsive icon */}
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="requirements"
                className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-gray-700 transition text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
              >
                <AlertTriangle
                  size={14}
                  className="sm:w-4 sm:h-4 flex-shrink-0"
                />
                <span>Requirements</span>
              </TabsTrigger>
              <TabsTrigger
                value="process"
                className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-gray-700 transition text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
              >
                <Calendar size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                {/* Use shorter text or rely on scrolling */}
                <span className="hidden xs:inline">Application</span>
                <span className="inline xs:hidden">Process</span>
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-gray-700 transition text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
              >
                <Briefcase size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Documents</span>
              </TabsTrigger>
              <TabsTrigger
                value="interview"
                className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-gray-700 transition text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
              >
                <Compass size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Interview</span>
              </TabsTrigger>
              <TabsTrigger
                value="faq"
                className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-gray-700 transition text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
              >
                <HelpCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                <span>FAQ</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <div className="mt-6 text-gray-900 rounded-xl shadow-lg p-4 sm:p-6 w-full">
            {" "}
            {/* Adjusted padding */}
            <TabsContent value="overview">
              <OverviewTab theme={theme} />
            </TabsContent>
            <TabsContent value="requirements">
              <RequirementsTab theme={theme} />
            </TabsContent>
            <TabsContent value="process">
              <ProcessTab theme={theme} />
            </TabsContent>
            <TabsContent value="documents">
              <DocumentsTab theme={theme} />
            </TabsContent>
            <TabsContent value="interview">
              <InterviewTab theme={theme} />
            </TabsContent>
            <TabsContent value="faq">
              <FAQTab theme={theme} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default F1visaSection;
