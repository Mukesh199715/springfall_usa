// Enhanced Visa Experiences Page with Custom Dropdown and Consistent Theme - Fully Responsive

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PlusCircle, Filter, Search, MapPin, Calendar, BookOpen, ExternalLink, ArrowRight, Loader2
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VisaExperience } from '@/types/database';
import { experiences as staticExperiences } from '../data/experiences';

const filterOptions = [
  { label: 'All Outcomes', value: 'all' },
  { label: 'Approved', value: 'yes' },
  { label: 'Denied', value: 'no' },
  { label: 'Admin Processing', value: 'administrative' },
];

const VisaExperiencesPage = () => {
  const [experiences, setExperiences] = useState<VisaExperience[]>([]);
  const [filteredExperiences, setFilteredExperiences] = useState<VisaExperience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setExperiences(staticExperiences);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, filter, experiences]);

  const applyFilters = () => {
    let filtered = [...experiences];
    if (searchTerm) {
      filtered = filtered.filter(
        (exp) =>
          exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.consulate.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exp.experience.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filter !== 'all') {
      filtered = filtered.filter((exp) => exp.approved === filter);
    }
    setFilteredExperiences(filtered);
  };

  const getApprovalStatusColor = (status: string) => {
    switch (status) {
      case 'yes': return 'text-green-400 bg-green-900/30';
      case 'no': return 'text-red-400 bg-red-900/30';
      case 'administrative': return 'text-yellow-400 bg-yellow-900/30';
      default: return 'text-gray-400 bg-gray-700/30';
    }
  };

  const getApprovalStatusLabel = (status: string) => {
    switch (status) {
      case 'yes': return 'Approved';
      case 'no': return 'Denied';
      case 'administrative': return 'Admin Processing';
      default: return 'Unknown';
    }
  };

  const getRandomAvatar = (name: string) => {
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `https://i.pravatar.cc/150?u=${hash}`;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow pt-28 px-4 sm:px-6 lg:px-12">
        <section className="py-16 bg-gradient-to-br from-black via-blue-950 to-black shadow-black shadow-inner text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight bg-white text-transparent bg-clip-text">
            Visa <span className="text-white">Experiences</span>
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Real F-1 visa interview experiences from students across the world. Gain confidence and prepare better.
          </p>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                  <Input
                    placeholder="Search experiences..."
                    className="pl-10 bg-white/5 text-white border-white/10 backdrop-blur-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-white/40" /> 
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.map(({ value, label }) => (
                      <button
                        key={value}
                        className={`px-3 py-1 rounded-2xl text-sm transition-all duration-300 border border-white/10 backdrop-blur-md ${
                          filter === value ? 'bg-blue-600 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                        onClick={() => setFilter(value)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/visa-experiences/share">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-3xl w-full sm:w-auto">
                  <PlusCircle size={16} className="mr-2" />
                  Share Your Experience
                </Button>
              </Link>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="animate-spin text-blue-500 mr-2" size={24} />
                <span className="text-white/70">Loading experiences...</span>
              </div>
            ) : filteredExperiences.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:shadow-[0_0_40px_#00bfff33] transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={getRandomAvatar(exp.name)}
                        alt={exp.name}
                        className="w-14 h-14 rounded-full border-4 border-blue-500/30 object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-white text-sm sm:text-base">{exp.name}</h3>
                        <p className="text-xs sm:text-sm text-blue-400">{exp.university}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 text-xs">
                      <span className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-white/70">
                        <MapPin size={12} /> {exp.consulate}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-white/70">
                        <Calendar size={12} /> {new Date(exp.interview_date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-white/70">
                        <BookOpen size={12} /> {exp.major}
                      </span>
                    </div>

                    <p className="text-white/70 text-sm italic mb-4 line-clamp-3">
                      “{exp.experience.slice(0, 140)}...”
                    </p>

                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getApprovalStatusColor(exp.approved)}`}>
                        {getApprovalStatusLabel(exp.approved)}
                      </span>
                      <Link to={`/visa-experiences/${exp.id}`}>
                        <Button variant="ghost" size="sm" className="text-blue-400 hover:text-white">
                          Read Full <ExternalLink size={14} className="ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white/5 rounded-xl border border-white/10 backdrop-blur">
                <Search size={36} className="mx-auto text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No experiences found</h3>
                <p className="text-white/60 mb-6">
                  {searchTerm || filter !== 'all'
                    ? 'Try adjusting your search or filters'
                    : 'Be the first to share your visa interview experience'}
                </p>
                <Link to="/visa-experiences/share">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Share Your Experience <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VisaExperiencesPage;
