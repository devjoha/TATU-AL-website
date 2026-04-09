import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, Sprout, ArrowRight, Library, Microscope, Beaker, Globe, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import the design reference as requested
import referenceImage from "@assets/image_1775712792086.png";

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full relative overflow-x-hidden text-slate-800">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')`,
        }}
      />
      {/* Optional overlay to soften the image and ensure readability */}
      <div className="fixed inset-0 z-[-1] bg-white/10 backdrop-blur-[2px]" />

      {/* Floating Navbar */}
      <div className="w-full max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8 relative z-50">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-panel rounded-full px-6 py-3 flex items-center justify-between"
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-slate-800 text-white p-1.5 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm tracking-widest px-1">VL</span>
            </div>
            <span className="font-extrabold tracking-widest text-slate-900 text-lg hidden sm:block">
              VERTEX LYCEUM
            </span>
          </div>

          {/* Center: Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Programs', 'Admissions', 'Events', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold tracking-wide text-slate-800 hover:text-orange-500 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-4">
            <a href="#login" className="text-sm font-semibold text-slate-800 hover:text-orange-500 hidden sm:block">
              Log in
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 font-semibold shadow-md">
              Sign up
            </Button>
          </div>
        </motion.nav>
      </div>

      {/* Main Content Grid */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4"
        >
          {/* Row 1 & 2 */}
          {/* Card 1 (Hero - Large, Left) */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel rounded-[2rem] p-8 md:p-12 col-span-1 md:col-span-4 lg:col-span-6 lg:row-span-2 flex flex-col justify-between min-h-[400px]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-8">
                <span className="uppercase tracking-widest font-bold text-xs bg-white/50 px-3 py-1 rounded-full text-slate-700">
                  Welcome to Vertex
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                UNLOCK <br />
                YOUR <br />
                POTENTIAL.
              </h1>
              <p className="text-lg md:text-xl text-slate-700 font-medium max-w-md pt-4">
                Explore diverse learning paths and a supportive community designed for your success.
              </p>
            </div>
            
            <div className="pt-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 h-auto text-lg font-semibold shadow-lg group">
                Learn more
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Card 2 (Feature - Top Center) */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel rounded-[2rem] p-8 col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-between group hover:bg-white/50 transition-colors min-h-[240px]"
          >
            <div>
              <h3 className="uppercase tracking-widest font-bold text-sm text-slate-900 mb-4">
                Academic Programs
              </h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Explore our diverse range of subjects and hands-on activities.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="bg-white/60 p-4 rounded-full text-orange-500 group-hover:scale-110 transition-transform">
                <BookOpen size={32} strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Card 4 (Vertical Sidebar - Far Right) - spans 2 rows */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel rounded-[2rem] p-6 lg:p-8 col-span-1 md:col-span-4 lg:col-span-3 lg:row-span-2 flex flex-col gap-6"
          >
            <div className="flex-1">
              <h3 className="uppercase tracking-widest font-bold text-sm text-slate-900 mb-2">
                Explore our academic disciplines:
              </h3>
              <p className="text-slate-600 text-sm font-medium mb-6">
                Find your passion in our curated programs.
              </p>
              
              <div className="flex gap-3 mb-6">
                <button className="bg-white/60 hover:bg-white p-3 rounded-full text-slate-800 transition-colors shadow-sm">
                  <Atom size={20} />
                </button>
                <button className="bg-white/60 hover:bg-white p-3 rounded-full text-slate-800 transition-colors shadow-sm">
                  <Globe size={20} />
                </button>
                <button className="bg-white/60 hover:bg-white p-3 rounded-full text-slate-800 transition-colors shadow-sm">
                  <Library size={20} />
                </button>
              </div>
              
              <a href="#disciplines" className="text-sm font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1 group">
                View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Embedded image within the card */}
            <div className="relative rounded-2xl overflow-hidden h-48 lg:flex-1 w-full group min-h-[200px]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80" 
                alt="Library"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <span className="uppercase tracking-widest font-bold text-[10px] sm:text-xs text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block">
                  Modern Lyceum Library.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Feature - Top Right-Center, practically Row 2, Col 7-9) */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel rounded-[2rem] p-8 col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-between group hover:bg-white/50 transition-colors min-h-[240px]"
          >
            <div>
              <h3 className="uppercase tracking-widest font-bold text-sm text-slate-900 mb-4">
                Learning Path
              </h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Tailored paths for exceptional academic and personal growth.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="bg-white/60 p-4 rounded-full text-orange-500 group-hover:scale-110 transition-transform">
                <Sprout size={32} strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Row 3 */}
          {/* Card 5 (Image Card - Bottom Left) */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2rem] overflow-hidden col-span-1 md:col-span-2 lg:col-span-7 relative group h-64 md:h-80 shadow-lg border border-white/20 mt-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" 
              alt="Students chatting" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="glass-panel bg-white/20 backdrop-blur-md rounded-2xl p-4 border-white/20 inline-block">
                <p className="text-white font-bold tracking-wide text-sm sm:text-base leading-tight">
                  <span className="opacity-70 block text-xs uppercase tracking-widest mb-1">Student Community</span>
                  JOIN A VIBRANT STUDENT COMMUNITY.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6 (Image Card - Bottom Center) */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2rem] overflow-hidden col-span-1 md:col-span-2 lg:col-span-5 relative group h-64 md:h-80 shadow-lg border border-white/20 mt-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80" 
              alt="Students smiling" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="glass-panel bg-white/20 backdrop-blur-md rounded-2xl p-4 border-white/20 inline-block">
                <p className="text-white font-bold tracking-wide text-sm sm:text-base leading-tight">
                  <span className="opacity-70 block text-xs uppercase tracking-widest mb-1">Success Stories</span>
                  HEAR FROM OUR ALUMNI.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
