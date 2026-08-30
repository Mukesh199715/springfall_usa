import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, AlertTriangle, Calendar, Clock, DollarSign, Building, Compass, HelpCircle, Briefcase, Search, Shield } from 'lucide-react';
import F1visaSection from '@/components/common/F1visaInfo/F1visaSection';

const F1VisaInfoPage = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const steps = [
    {
      title: "University Research & Application",
      desc: "Find universities, apply & get accepted.",
    },
    {
      title: "Receive I‑20 Form",
      desc: "School issues your I‑20 after admission.",
    },
    {
      title: "Pay SEVIS Fee",
      desc: "Pay the mandatory SEVIS I‑901 fee online.",
    },
    {
      title: "Complete DS‑160",
      desc: "Fill out DS‑160 visa application form.",
    },
    { title: "Schedule Interview", desc: "Book at U.S. Embassy or Consulate." },
    { title: "Interview Prep", desc: "Gather documents & practice answers." },
    {
      title: "Attend Interview",
      desc: "Go to your scheduled visa appointment.",
    },
    {
      title: "Travel to U.S.",
      desc: "Make arrangements and arrive in the U.S.",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "dark bg-gray-900 text-white" : ""
      }`}
    >
      <Header />

      <main className="flex-grow pt-28 bg-black">
        <section className={`py-24 px-4 md:px-8 lg:px-16 text-center `}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              F-1 Student Visa{" "}
              <span className="text-blue-500">Information</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Get comprehensive information about the F-1 student visa,
              including requirements, application process, documentation, and
              best practices for a successful visa interview.
            </p>
          </div>
        </section>

        <section className=" py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-white">
                F1 Visa <span className="text-blue-500">Guide</span>
              </h2>
              <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto">
                Your complete F‑1 student visa walkthrough—from application to
                landing in the U.S.
              </p>
            </div>

            {/* Grid Layout: Left Info + Right Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Info Section */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  What is the F1 Visa?
                </h3>
                <p className="text-gray-200 mb-6">
                  The F1 visa is a non-immigrant visa for international students
                  enrolling in U.S. institutions. It's specifically for academic
                  students attending colleges, universities, high schools, and
                  language programs.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Why is the F1 Visa Needed?
                </h3>
                <p className="text-gray-200 mb-4">
                  The F1 visa legally allows international students to:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-200 mb-6">
                  <li>Study full-time at accredited U.S. schools</li>
                  <li>Work on-campus during studies (limited hours)</li>
                  <li>Apply for Optional Practical Training (OPT)</li>
                  <li>Enter/exit the U.S. during the academic program</li>
                </ul>

                <div className="flex items-start bg-white shadow-sm rounded-lg p-4 border border-gray-200">
                  <Shield size={24} className="text-blue-600 mr-3 mt-1" />
                  <p className="text-blue-800 font-medium">
                    Our resources are updated regularly to reflect the latest
                    U.S. visa policies.
                  </p>
                </div>
              </div>

              {/* Right Steps Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 text-sm font-bold">
                        {i + 1}
                      </div>
                      <h4 className="font-semibold text-gray-800">{s.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center justify-center mb-4 space-x-2">
                <Search size={26} className="text-blue-600" />
                <h3 className="text-2xl font-extrabold text-white">
                  Need More Help?
                </h3>
              </div>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Explore our guides on interview prep, document checklists, and
                read visa success stories from real students.
              </p>
              <div className="flex flex-wrap justify-center  gap-4">
                <Link to="/interview-prep">
                  <Button
                    variant="outline"
                    className="border-white text-blue-600 rounded-full hover:bg-blue-50 hover:scale-105"
                  >
                    Interview Preparation
                  </Button>
                </Link>
                <Link to="/visa-experiences">
                  <Button
                    variant="outline"
                    className="border-white text-blue-600 rounded-full hover:bg-blue-50 hover:scale-105"
                  >
                    Visa Experiences
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button
                    variant="outline"
                    className="border-white text-blue-600 rounded-full hover:bg-blue-50 hover:scale-105"
                  >
                    Document Checklists
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

                <section>
                  <F1visaSection/>
                </section>
       
      </main>

      <Footer />
    </div>
  );
};

export default F1VisaInfoPage;
