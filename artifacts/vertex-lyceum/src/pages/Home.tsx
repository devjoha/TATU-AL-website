import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, GraduationCap, MapPin, Users, Award, ChevronRight,
  CheckCircle, ArrowRight, Globe, Cpu, FlaskConical, Stethoscope,
  Building2, Star, Phone, Mail, Menu, X, TrendingUp, Clock
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const STATS = [
  { value: "62,062", label: "Applicants in 2024/25", icon: Users },
  { value: "336", label: "Students admitted", icon: GraduationCap },
  { value: "68%", label: "A*–B at A Level", icon: Award },
  { value: "14", label: "Presidential Schools", icon: Building2 },
  { value: "88", label: "Int'l university offers", icon: Globe },
  { value: "23", label: "Unis in QS Asia Ranking", icon: Star },
];

const INSTITUTIONS = [
  {
    name: "Presidential Schools",
    short: "PIIMA",
    type: "State Lyceum",
    city: "14 regions",
    tag: "Free & Boarding",
    tagColor: "bg-emerald-100 text-emerald-700",
    highlight: "Cambridge A Levels + National curriculum",
    description:
      "Elite state-funded secondary schools across all 14 regions offering Cambridge IGCSE/A Level education combined with the Uzbek national curriculum. Free tuition and boarding for top students aged 11–18.",
    programs: ["STEAM", "Cambridge A Level", "Robotics", "Programming"],
    icon: Award,
    iconBg: "bg-purple-600",
    acceptance: "0.5%",
  },
  {
    name: "National University of Uzbekistan",
    short: "NUU",
    type: "Public University",
    city: "Tashkent",
    tag: "Est. 1918",
    tagColor: "bg-blue-100 text-blue-700",
    highlight: "Oldest & most prestigious in Uzbekistan",
    description:
      "Founded in 1918, NUU is the flagship of higher education in Uzbekistan. Renowned for mathematics, physics, chemistry, computer science, law, and social sciences. 12 faculties, thousands of students.",
    programs: ["Mathematics", "Physics", "Law", "Computer Science"],
    icon: BookOpen,
    iconBg: "bg-blue-600",
    acceptance: "~15%",
  },
  {
    name: "New Uzbekistan University",
    short: "NewUU",
    type: "Public University",
    city: "Tashkent",
    tag: "MIT Partnership",
    tagColor: "bg-orange-100 text-orange-700",
    highlight: "MIT & TU Munich global partnership",
    description:
      "Modern university with global partnerships including MIT and TUM. Offers cutting-edge programs in engineering, computing, AI, and management. Presidential School graduates receive automatic first-year grants.",
    programs: ["Software Engineering", "AI & Cybersecurity", "Mechanical Engineering", "Management"],
    icon: Cpu,
    iconBg: "bg-orange-500",
    acceptance: "Competitive",
  },
  {
    name: "Westminster International University",
    short: "WIUT",
    type: "International University",
    city: "Tashkent",
    tag: "UK Diploma",
    tagColor: "bg-red-100 text-red-700",
    highlight: "First international university in Central Asia",
    description:
      "Founded 2002 in partnership with University of Westminster, London. All programs taught in English. Graduates receive diplomas awarded by University of Westminster. Bachelor, Master, and PhD programs available.",
    programs: ["Business", "Computing", "Economics", "Law"],
    icon: Globe,
    iconBg: "bg-red-600",
    acceptance: "~20%",
  },
  {
    name: "TUIT",
    short: "TUIT",
    type: "Public University",
    city: "Tashkent",
    tag: "#2 in Uzbekistan",
    tagColor: "bg-cyan-100 text-cyan-700",
    highlight: "Top-ranked IT & cybersecurity university",
    description:
      "Tashkent University of Information Technologies — ranked #2 nationally and globally recognized for IT, cybersecurity, and telecommunications. Offers Bachelor, Master, and PhD programs in cutting-edge tech fields.",
    programs: ["IT", "Cybersecurity", "Telecommunications", "Data Science"],
    icon: Cpu,
    iconBg: "bg-cyan-600",
    acceptance: "~25%",
  },
  {
    name: "Samarkand State Medical University",
    short: "SamDTU",
    type: "Public University",
    city: "Samarkand",
    tag: "Est. 1930",
    tagColor: "bg-green-100 text-green-700",
    highlight: "Leading medical education since 1930",
    description:
      "One of Central Asia's most respected medical universities. Offers programs in general medicine, dentistry, and pharmacy. Recognized internationally and attracts students from across the region.",
    programs: ["Medicine", "Dentistry", "Pharmacy", "Nursing"],
    icon: Stethoscope,
    iconBg: "bg-green-600",
    acceptance: "~30%",
  },
];

const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Online Application",
    description: "Submit documents online at ariza.piima.uz. Requires birth certificate, school transcripts certified by principal, recent 3×4 photo, and academic record copy.",
    icon: Globe,
    color: "bg-violet-500",
  },
  {
    step: "02",
    title: "Mathematics Test",
    description: "Top candidates sit a 30-item mathematics test. The highest 480 scoring students advance to the final stage of the selection process.",
    icon: FlaskConical,
    color: "bg-blue-500",
  },
  {
    step: "03",
    title: "Final Assessment",
    description: "Cambridge-designed test in Uzbek, Karakalpak, or English. Scored across Critical Thinking (32%), Problem Solving (48%), and English (20%). Only 24 students admitted per school.",
    icon: Award,
    color: "bg-emerald-500",
  },
];

const PROGRAMS = [
  { name: "STEAM", icon: FlaskConical, color: "text-violet-600 bg-violet-50", desc: "Science, Technology, Engineering, Arts & Mathematics — the core curriculum framework at Presidential Schools." },
  { name: "Cambridge A Level", icon: Award, color: "text-blue-600 bg-blue-50", desc: "Internationally recognised AS & A Level qualifications. Grade 10 students sit AS Levels, Grade 11 sit A Levels." },
  { name: "AI & Cybersecurity", icon: Cpu, color: "text-cyan-600 bg-cyan-50", desc: "Offered at TUIT and NewUU with industry-aligned curricula preparing graduates for the global tech sector." },
  { name: "Medicine & Health", icon: Stethoscope, color: "text-green-600 bg-green-50", desc: "World-class medical programs at Tashkent Medical Academy and Samarkand State Medical University since 1919." },
  { name: "Business & Law", icon: BookOpen, color: "text-orange-600 bg-orange-50", desc: "UK-standard business and law degrees at WIUT, with full University of Westminster accreditation." },
  { name: "Engineering & Research", icon: TrendingUp, color: "text-rose-600 bg-rose-50", desc: "MIT-partnered engineering programs at New Uzbekistan University, ranked in Times Higher Education 501–600." },
];

const CITIES = [
  { city: "Tashkent", count: 6, note: "Capital & education hub" },
  { city: "Samarkand", count: 2, note: "Historic city, medical & sciences" },
  { city: "Bukhara", count: 1, note: "General sciences & humanities" },
  { city: "Namangan", count: 1, note: "Presidential School, 0.7% acceptance" },
  { city: "Ferghana", count: 1, note: "Regional presidential school" },
  { city: "Andijan", count: 1, note: "Presidential School" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeInstitution, setActiveInstitution] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* ─── Navbar ─── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow">
              <span className="text-white font-bold text-sm tracking-wider">VL</span>
            </div>
            <div>
              <div className="font-extrabold text-slate-900 tracking-tight leading-none text-base">VERTEX LYCEUM</div>
              <div className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Uzbekistan Education Guide</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {["Institutions", "Programs", "Admissions", "Cities", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#admissions" className="text-sm font-semibold text-slate-600 hover:text-violet-600 px-4 py-2 rounded-lg transition-colors">
              Apply Now
            </a>
            <a href="#contact"
              className="bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow hover:opacity-90 transition-opacity">
              Get Guidance
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-slate-600">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
            {["Institutions", "Programs", "Admissions", "Cities", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="block text-sm font-semibold text-slate-700 py-2">
                {item}
              </a>
            ))}
            <a href="#admissions"
              className="block w-full text-center bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-lg mt-2">
              Apply Now
            </a>
          </div>
        )}
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-indigo-900 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <MapPin size={12} /> Uzbekistan · 2025 Education Guide
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Discover the Best<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
                Lyceums & Universities
              </span><br />
              in Uzbekistan
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Uzbekistan's education system is transforming rapidly. From state-funded Presidential Schools with Cambridge A Levels to MIT-partnered universities — find your path to academic excellence.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#institutions"
                className="bg-white text-violet-700 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm flex items-center gap-2">
                Explore Institutions <ArrowRight size={16} />
              </a>
              <a href="#admissions"
                className="bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all text-sm flex items-center gap-2">
                Admissions Guide <ChevronRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-white/5 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {STATS.map(({ value, label, icon: Icon }) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}>
                  <div className="text-2xl font-extrabold text-white">{value}</div>
                  <div className="text-xs text-white/55 mt-0.5 leading-tight">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Institutions ─── */}
      <section id="institutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full">Featured Institutions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                Top Lyceums & Universities
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base">
                Explore the leading educational institutions in Uzbekistan — from elite Presidential Schools to globally-partnered universities.
              </p>
            </motion.div>

            {/* Tab selector */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-10">
              {INSTITUTIONS.map((inst, i) => (
                <button key={inst.short}
                  onClick={() => setActiveInstitution(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeInstitution === i
                    ? "bg-violet-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                  {inst.short}
                </button>
              ))}
            </motion.div>

            {/* Active institution card */}
            <motion.div key={activeInstitution}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`${INSTITUTIONS[activeInstitution].iconBg} w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      {(() => { const Icon = INSTITUTIONS[activeInstitution].icon; return <Icon size={26} className="text-white" />; })()}
                    </div>
                    <div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${INSTITUTIONS[activeInstitution].tagColor}`}>
                        {INSTITUTIONS[activeInstitution].tag}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 mt-1 leading-tight">
                        {INSTITUTIONS[activeInstitution].name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-500 font-medium">{INSTITUTIONS[activeInstitution].type}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin size={11} /> {INSTITUTIONS[activeInstitution].city}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {INSTITUTIONS[activeInstitution].description}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Programs Offered</div>
                    <div className="flex flex-wrap gap-2">
                      {INSTITUTIONS[activeInstitution].programs.map(p => (
                        <span key={p} className="text-xs bg-white border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-widest font-medium">Acceptance Rate</div>
                      <div className="text-xl font-extrabold text-violet-600">{INSTITUTIONS[activeInstitution].acceptance}</div>
                    </div>
                    <a href="#admissions"
                      className="ml-auto bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
                      Learn More <ArrowRight size={15} />
                    </a>
                  </div>
                </div>

                {/* Right visual */}
                <div className="relative bg-gradient-to-br from-violet-600 to-blue-700 p-8 lg:p-12 flex flex-col justify-between text-white min-h-[320px]">
                  <div className="text-sm font-bold text-white/70 uppercase tracking-widest mb-4">Key Highlight</div>
                  <blockquote className="text-xl lg:text-2xl font-bold leading-snug text-white">
                    "{INSTITUTIONS[activeInstitution].highlight}"
                  </blockquote>

                  {/* Mini cards */}
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    {[
                      { label: "Type", val: INSTITUTIONS[activeInstitution].type },
                      { label: "Location", val: INSTITUTIONS[activeInstitution].city },
                      { label: "Tag", val: INSTITUTIONS[activeInstitution].tag },
                      { label: "Programs", val: `${INSTITUTIONS[activeInstitution].programs.length} offered` },
                    ].map(({ label, val }) => (
                      <div key={label} className="bg-white/10 rounded-xl p-3">
                        <div className="text-xs text-white/60 font-medium">{label}</div>
                        <div className="text-sm font-bold text-white mt-0.5 truncate">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cards grid */}
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {INSTITUTIONS.map((inst, i) => {
                const Icon = inst.icon;
                return (
                  <motion.button key={inst.short} variants={fadeUp}
                    onClick={() => setActiveInstitution(i)}
                    className={`text-left p-5 rounded-2xl border transition-all group ${activeInstitution === i
                      ? "border-violet-300 bg-violet-50 shadow-md"
                      : "border-slate-200 bg-white hover:border-violet-200 hover:shadow-sm"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`${inst.iconBg} w-10 h-10 rounded-xl flex items-center justify-center`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm leading-tight">{inst.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{inst.city}</div>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${inst.tagColor}`}>{inst.tag}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Programs ─── */}
      <section id="programs" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">Academic Programs</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                Fields of Study
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base">
                From Cambridge-accredited STEAM programs to AI research labs and medical schools — Uzbekistan offers world-class education across diverse disciplines.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROGRAMS.map(({ name, icon: Icon, color, desc }) => (
                <motion.div key={name} variants={fadeUp}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-all group">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-2">{name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  <div className="mt-4 flex items-center text-xs font-semibold text-violet-600 gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={13} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Admissions ─── */}
      <section id="admissions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">How to Apply</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                Presidential School Admissions
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base">
                The 3-stage selection process is designed by Cambridge Assessment Admissions Testing. Applications are open online for Grade 5 students in all 14 regions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {ADMISSION_STEPS.map(({ step, title, description, icon: Icon, color }) => (
                <motion.div key={step} variants={fadeUp}
                  className="relative bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">Stage {step}</div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-2">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Requirements */}
            <motion.div variants={fadeUp}
              className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-extrabold mb-4">Eligibility & Requirements</h3>
                  <ul className="space-y-3">
                    {[
                      "Excellent academic record in math and natural sciences",
                      "Must be a resident of the region you are applying to",
                      "Grade 5 applications only — ages 11–12",
                      "Free tuition and full boarding provided",
                      "Applications via ariza.piima.uz",
                    ].map(req => (
                      <li key={req} className="flex items-start gap-3 text-sm text-white/90">
                        <CheckCircle size={16} className="text-emerald-300 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-4">Documents Needed</h3>
                  <ul className="space-y-3">
                    {[
                      "Birth certificate (original)",
                      "School certificates certified by principal",
                      "Recent 3×4 cm photo (taken within 2 months)",
                      "Copy of full academic record",
                      "Regional residency confirmation",
                    ].map(doc => (
                      <li key={doc} className="flex items-start gap-3 text-sm text-white/90">
                        <CheckCircle size={16} className="text-cyan-300 mt-0.5 flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <a href="https://ariza.piima.uz" target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-6 py-3 rounded-xl text-sm hover:shadow-lg transition-shadow">
                    Apply at ariza.piima.uz <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Cities ─── */}
      <section id="cities" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full">Study Cities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                Where to Study in Uzbekistan
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base">
                Presidential Schools operate in all 14 regions. Major universities are concentrated in Tashkent, with strong medical schools in Samarkand and Bukhara.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CITIES.map(({ city, count, note }) => (
                <motion.div key={city} variants={fadeUp}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-rose-500" />
                      <h3 className="font-extrabold text-slate-900">{city}</h3>
                    </div>
                    <span className="text-xs bg-rose-50 text-rose-600 font-bold px-2.5 py-1 rounded-full">
                      {count} institution{count > 1 ? "s" : ""}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm">{note}</p>
                </motion.div>
              ))}
            </div>

            {/* Cost card */}
            <motion.div variants={fadeUp}
              className="mt-8 bg-white border border-slate-200 rounded-3xl p-8 grid sm:grid-cols-3 gap-6 text-center shadow-sm">
              <div>
                <div className="text-3xl font-extrabold text-violet-600 mb-1">Free</div>
                <div className="text-sm text-slate-500 font-medium">Presidential School tuition & boarding</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-blue-600 mb-1">$1,500–$3,000</div>
                <div className="text-sm text-slate-500 font-medium">Average annual university tuition</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-emerald-600 mb-1">$50–$150</div>
                <div className="text-sm text-slate-500 font-medium">Monthly dorm cost in Uzbekistan</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Uzbekistan ─── */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 to-violet-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">
                Why Choose Uzbekistan?
              </h2>
              <p className="text-white/60 max-w-xl mx-auto text-base">
                One of the fastest-transforming education ecosystems in Central Asia, backed by real international results.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: TrendingUp, title: "QS Asia Ranking", desc: "23 Uzbek universities in the QS Asia Rankings 2025 — a historic record for the country." },
                { icon: Globe, title: "Global Partnerships", desc: "MIT, TU Munich, University of Westminster, Cambridge, Sungkyunkwan University." },
                { icon: Award, title: "Cambridge A Levels", desc: "68% of Presidential School graduates scored A*–B. 88 of 96 graduates received international university offers." },
                { icon: Clock, title: "Rapid Reform", desc: "Since 2017, Uzbekistan has launched 14 Presidential Schools, IT Park, and dozens of international branch campuses." },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp}
                  className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition-all">
                  <div className="w-11 h-11 bg-violet-500/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-violet-300" />
                  </div>
                  <h3 className="font-extrabold text-white mb-2">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="text-xs font-bold tracking-widest uppercase text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                Need Guidance?
              </h2>
              <p className="text-slate-500 text-base mb-10 max-w-lg mx-auto">
                Whether you're a student planning to apply to a Presidential School or a parent researching universities — we're here to help.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 grid sm:grid-cols-2 gap-8 text-left">
              {[
                { icon: Phone, label: "Call us", value: "+998 71 234 56 78", sub: "Mon–Fri, 9:00–18:00" },
                { icon: Mail, label: "Email us", value: "info@vertexlyceum.uz", sub: "Reply within 24 hours" },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-violet-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="font-extrabold text-slate-900">{value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <a href="https://ariza.piima.uz" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold px-8 py-4 rounded-2xl text-base hover:opacity-90 hover:shadow-lg transition-all">
                Start Your Application at ariza.piima.uz <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">VL</span>
            </div>
            <div>
              <div className="font-extrabold text-sm tracking-tight">VERTEX LYCEUM</div>
              <div className="text-xs text-slate-400">Uzbekistan Education Guide · 2025</div>
            </div>
          </div>
          <div className="text-xs text-slate-500 text-center sm:text-right">
            Data sourced from PIIMA, Ministry of Higher Education, QS Rankings, and Cambridge Assessment. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
