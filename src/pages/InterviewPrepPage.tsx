import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { MessageCircle, Video, Book, FileText, ArrowRight, BookOpen, Download, CheckCircle, Play, Clock, AlertTriangle } from 'lucide-react';

const InterviewPrepPage = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);
  
   const academicQuestions = [
     {
       id: "q1",
       question: "Why did you choose this university/college?",
       howToAnswer:
         "Speak specifically about the school's academic strengths in your field, unique programs, research opportunities, faculty expertise, and its reputation. If possible, mention specific professors whose work aligns with your interests.",
       sampleAnswer: `"I chose Stanford University because of its exceptional computer science program, which is consistently ranked among the top programs globally. The university's focus on innovation and its proximity to Silicon Valley offer unique opportunities for internships and industry connections. I'm particularly interested in working with Professor Smith, whose research in artificial intelligence aligns with my academic interests."`,
     },
     {
       id: "q2",
       question: "Why did you choose this major/program?",
       howToAnswer:
         "Explain your passion for the field, how your academic background or work experience has prepared you for this program, and how it aligns with your career goals. Make connections between your past experiences and future aspirations.",
       sampleAnswer: `"I've chosen to pursue a Master's in Environmental Engineering because I've always been passionate about developing sustainable solutions to environmental challenges. During my undergraduate studies in Chemical Engineering, I completed research projects on water purification systems, which deepened my interest in this field. This program will help me develop the specialized skills I need to contribute to environmental conservation efforts in my country, which faces significant water scarcity issues."`,
     },
     // Add more questions as needed
     {
       id: "q3",
       question: "How does this program relate to your previous studies?",
       howToAnswer:
         "Highlight the logical progression from your previous academic work to this program. Identify specific skills, knowledge, or interests from your background that prepare you for success in this program.",
       sampleAnswer: `"My undergraduate degree in Economics provided me with a strong foundation in statistical analysis, economic theory, and research methodologies. This MBA program will build upon that knowledge while adding specialized skills in business management, leadership, and strategic planning. My undergraduate research on emerging markets is directly relevant to the international business concentration I plan to pursue in my MBA studies."`,
     },
     {
       id: "q4",
       question:
         "Why do you want to study in the United States rather than in your home country?",
       howToAnswer:
         "Focus on the unique educational opportunities, resources, and expertise available in the U.S. that are not available in your home country. Be specific about what you hope to gain from the American educational system that will benefit you when you return home.",
       sampleAnswer: `"While there are good universities in my country, the U.S. offers advanced research facilities and specialized programs in aerospace engineering that are not available at home. American universities are at the forefront of innovation in this field, with opportunities to work on cutting-edge projects and access to industry partnerships. The knowledge and experience I gain in the U.S. will be valuable when I return home to contribute to our growing aerospace industry."`,
     },
     {
       id: "q5",
       question: "What are your English language qualifications?",
       howToAnswer:
         "Clearly state your English language test scores (TOEFL, IELTS, etc.) and any other qualifications or experiences that demonstrate your English proficiency. If English is used frequently in your academic or professional life, mention this as well.",
       sampleAnswer: `"I scored 105 on the TOEFL iBT, with particularly strong scores in speaking and writing. I've also been studying in English-medium schools throughout my high school and undergraduate education. Additionally, I worked for two years at an international company where English was the primary language of communication, and I've presented research papers in English at several academic conferences."`,
     },
   ];

   const financialQuestions = [
     {
       id: "fq1",
       question: "How will you finance your studies in the United States?",
       howToAnswer:
         "Be specific about your funding sources, whether they include personal or family funds, scholarships, loans, or sponsorships. Mention the documents you have brought to prove your financial capacity.",
       sampleAnswer: `"My education will be funded through a combination of sources. I've received a 50% tuition scholarship from the university, which I've documented here. My parents will cover the remaining tuition and living expenses, as shown in these bank statements from our family savings account, which has been maintained for over five years. I've also brought a letter from my father's employer confirming his annual income and length of employment."`,
     },
     // Add more questions as needed
       {
      id: "fq2",
      question: "Who is your sponsor and what is their occupation?",
      howToAnswer: "Clearly identify your sponsor(s), explain your relationship to them, describe their occupation and financial capacity, and mention the documentation you have brought to verify this information.",
      sampleAnswer: `"My father is my primary sponsor. He has been working as a senior civil engineer at [Company Name] for the past 15 years. His annual income is approximately [amount], as verified by these employment letters and tax documents. My mother, who works as a hospital administrator, will also contribute to my educational expenses. Together, they have sufficient savings and income to support my studies, as shown in these bank statements and financial documents."`,
    },
   ];

  return (
    <div className={`min-h-screen bg-black text-white flex flex-col`}>
      <Header />

      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-br from-black via-blue-950 to-black shadow-black shadow-inner">
          <div className="container-custom mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white">
                F-1 Visa Interview{" "}
                <span className="text-blue-400">Preparation</span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8 md:mb-10">
                Master your F-1 visa interview with our comprehensive guides,
                practice questions, mock interviews, and expert tips. Being
                well-prepared can make all the difference in your study abroad
                journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="#common-questions">
                  <Button className="px-8 py-3 text-base font-medium r bg-white/80 hover:bg-white text-black transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl rounded-full">
                    Common Questions
                  </Button>
                </Link>
                <Link to="#mock-interview">
                  <Button
                    variant="outline"
                    className="px-8 py-3 text-base font-medium bg-white/80 hover:bg-white text-black transition-all duration-300 transform hover:-translate-y-1 shadow hover:shadow-md rounded-full"
                  >
                    Try Mock Interview
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-white">
                Understanding Your Visa Interview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Duration Card */}
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock size={32} className="text-green-400" />
                    </div>
                    <CardTitle className="text-white text-xl">
                      Interview Duration
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      What to expect time-wise
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      Most F-1 visa interviews are brief, typically lasting only
                      2-5 minutes. Despite the short duration, the consular
                      officer will make a decision about your visa based on this
                      interaction, so every moment counts.
                    </p>
                  </CardContent>
                </Card>

                {/* Assessment Card */}
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-blue-400" />
                    </div>
                    <CardTitle className="text-white text-xl">
                      Key Assessment Factors
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      What officers are evaluating
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      Consular officers primarily assess whether you are a
                      genuine student with non-immigrant intent (plans to return
                      home), sufficient financial resources, and clear academic
                      goals aligned with your program of study.
                    </p>
                  </CardContent>
                </Card>

                {/* Pitfalls Card */}
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="bg-amber-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle size={32} className="text-amber-400" />
                    </div>
                    <CardTitle className="text-white text-xl">
                      Common Pitfalls
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      What to avoid during the interview
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      Avoid memorized answers, inconsistencies with your
                      application, vague responses about your program or career
                      goals, and lacking proof of ties to your home country or
                      financial support.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-t border-b border-gray-700 mb-12">
          <div className="container-custom mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Video Container */}
              <div className="lg:w-1/2 w-full">
                <div className="aspect-video rounded-xl overflow-hidden bg-black/30 border border-gray-700">
                  {/* Replace with actual YouTube Embed */}
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=your_actual_video_id" // Replace with real ID
                    title="F-1 Visa Interview Walkthrough"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="object-cover"
                  ></iframe>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <Badge className="mb-4 bg-blue-900 text-blue-200 mx-auto lg:mx-0">
                  Featured Tutorial
                </Badge>
                <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-white">
                  F-1 Visa Interview Walkthrough
                </h3>
                <p className="mb-6 text-gray-300">
                  Watch this step-by-step guide to the F-1 visa interview
                  process, featuring a mock interview with commentary and expert
                  tips. Learn what to expect, how to answer challenging
                  questions, and how to make a positive impression.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 bg-white  text-black hover:bg-white hover:shadow-white hover:shadow-md rounded-full"
                  >
                    <Play size={16} />
                    Watch More Videos
                  </Button>
                  <Button className=" bg-white  text-black hover:bg-white hover:shadow-white hover:shadow-md rounded-full">
                    Join Mock Interview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="common-questions" className="mb-12">
          <div className="container-custom mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 md:mb-0">
                Common Interview Questions & Answers
              </h2>
              <Button
                variant="outline"
                className="bg-gray-800/50 border-gray-600 text-gray-200 hover:bg-gray-700/50 whitespace-nowrap"
              >
                <Download size={16} className="mr-2" />
                Download Full Question Bank
              </Button>
            </div>

            {/* Wrapper for horizontal scrolling on mobile */}
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              {" "}
              {/* Handles scrollbar gutter */}
              <Tabs defaultValue="academic" className="w-full">
                {/* TabsList scrolls horizontally on small screens, grid on larger */}
                <TabsList className="flex w-max min-w-full md:w-full md:grid md:grid-cols-4 gap-2 bg-gray-800/50 p-1">
                  <TabsTrigger
                    value="academic"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2 whitespace-nowrap"
                  >
                    <Book size={16} />
                    Academic
                  </TabsTrigger>
                  <TabsTrigger
                    value="financial"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2 whitespace-nowrap"
                  >
                    <FileText size={16} />
                    Financial
                  </TabsTrigger>
                  <TabsTrigger
                    value="ties"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2 whitespace-nowrap"
                  >
                    <BookOpen size={16} />
                    Ties to Home
                  </TabsTrigger>
                  <TabsTrigger
                    value="post"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white flex items-center gap-2 whitespace-nowrap"
                  >
                    <MessageCircle size={16} />
                    Post-Graduation
                  </TabsTrigger>
                </TabsList>

                {/* --- Tab Content Moved Inside the Same Tabs Component --- */}

                {/* Academic Tab Content */}
                <TabsContent value="academic">
                  <Card className="bg-gray-800/50 border-gray-700 mt-4">
                    {" "}
                    {/* Added mt-4 for spacing */}
                    <CardHeader>
                      <CardTitle className="text-white">
                        Academic Questions
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Questions about your study plans, school choice, and
                        academic background
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="min-h-[600px]">
                      <Accordion type="single" collapsible className="w-full">
                        {academicQuestions.map((item) => (
                          <AccordionItem
                            value={item.id}
                            key={item.id}
                            className="border-gray-700"
                          >
                            <AccordionTrigger className="text-white hover:text-white text-left">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 text-left">
                              <p className="font-medium mb-2">How to Answer:</p>
                              <p className="mb-2">{item.howToAnswer}</p>
                              <p className="font-medium mb-2">Sample Answer:</p>
                              <p className="italic border-l-4 border-blue-500 pl-4">
                                {item.sampleAnswer}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Financial Tab Content */}
                <TabsContent value="financial">
                  <Card className="bg-gray-800/50 border-gray-700 mt-4">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Financial Questions
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Questions about how you'll fund your education in the
                        United States
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="min-h-[600px]">
                      <Accordion type="single" collapsible className="w-full">
                        {financialQuestions.map((item) => (
                          <AccordionItem
                            value={item.id}
                            key={item.id}
                            className="border-gray-700"
                          >
                            <AccordionTrigger className="text-white hover:text-white text-left">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 text-left">
                              <p className="font-medium mb-2">How to Answer:</p>
                              <p className="mb-2">{item.howToAnswer}</p>
                              <p className="font-medium mb-2">Sample Answer:</p>
                              <p className="italic border-l-4 border-blue-500 pl-4">
                                {item.sampleAnswer}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Ties Tab Content */}
                <TabsContent value="ties">
                  <Card className="bg-gray-800/50 border-gray-700 mt-4">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Questions About Ties to Home Country
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Questions testing your non-immigrant intent
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="min-h-[600px]">
                      <p className="text-center py-8 text-gray-400">
                        Content coming soon...
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Post-Graduation Tab Content */}
                <TabsContent value="post">
                  <Card className="bg-gray-800/50 border-gray-700 mt-4">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Post-Graduation Plans
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Questions about your plans after completing your studies
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="min-h-[600px]">
                      <p className="text-center py-8 text-gray-400">
                        Content coming soon...
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InterviewPrepPage;