import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, GraduationCap, MapPin, Users, Award, ChevronRight,
  CheckCircle, ArrowRight, Globe, Cpu, FlaskConical, Trophy,
  Building2, Star, Phone, Mail, Menu, X, TrendingUp, Rocket,
  Dumbbell, Music, Code2, Microscope, Send, ExternalLink
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

// ─── Data ──────────────────────────────────────────────────────────────────

const STATS = [
  { value: "90%", label: "2023-yil OTMga kirish darajasi", icon: Trophy },
  { value: "450", label: "O'quvchi sig'imi", icon: Users },
  { value: "26", label: "Faol to'garaklar", icon: Star },
  { value: "3", label: "Kompyuter sinflari", icon: Cpu },
  { value: "2017", label: "Tashkil etilgan yil", icon: Building2 },
  { value: "370+", label: "2023-yil bitiruvchilari", icon: GraduationCap },
];

const GRADUATION = [
  { year: "2021", rate: 81, graduates: 239, placed: 19, note: "Birinchi to'liq to'lqin" },
  { year: "2022", rate: 85, graduates: 211, placed: 190, note: "Barqaror o'sish" },
  { year: "2023", rate: 90, graduates: 390, placed: 370, note: "Eng yaxshi natija" },
];

const PROGRAMS = [
  {
    icon: Cpu,
    color: "text-violet-600 bg-violet-50 border-violet-100",
    name: "Information Technologies",
    desc: "Three fully-equipped computer labs with world-standard hardware and software. Programming, networking, and digital literacy form the backbone of the curriculum.",
  },
  {
    icon: FlaskConical,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    name: "Chemistry & Physics",
    desc: "Modern science laboratories certified to international standards. Students conduct hands-on experiments and build a strong foundation in natural sciences.",
  },
  {
    icon: Microscope,
    color: "text-blue-600 bg-blue-50 border-blue-100",
    name: "Mathematics & Sciences",
    desc: "Deep focus on analytical thinking through mathematics, with strong cross-links to physics and computer science for future university readiness.",
  },
  {
    icon: Rocket,
    color: "text-orange-600 bg-orange-50 border-orange-100",
    name: "Startup Club",
    desc: "Every Thursday, students explore startup culture, innovative ideas, and modern skills. Led by Jaloliddin ustoz and Startup Ambassador Musayev Doniyor.",
  },
  {
    icon: Dumbbell,
    color: "text-rose-600 bg-rose-50 border-rose-100",
    name: "Sports & Physical Health",
    desc: "Modern sports hall and stadium equipped for football, athletics, rope pulling, weightlifting, and more. Inter-group championships build teamwork and leadership.",
  },
  {
    icon: Music,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    name: "26 Clubs & Circles",
    desc: "From robotics and programming to arts and languages — 26 extracurricular circles ensure students develop holistically beyond the classroom.",
  },
];

const ACTIVITIES = [
  {
    tag: "Innovation",
    tagColor: "bg-violet-100 text-violet-700",
    title: "Youth Innovation Exhibition at TATU",
    desc: "Lyceum students presented startup projects and modern technology innovations at TATU's Youth Day exhibition. International guests rated the projects highly.",
    icon: Rocket,
  },
  {
    tag: "Field Trip",
    tagColor: "bg-blue-100 text-blue-700",
    title: "School 21 Open Doors Day",
    desc: "Students visited School 21 campus to explore IT careers, collaborative and self-directed learning formats, and the future of the tech industry.",
    icon: Code2,
  },
  {
    tag: "Cultural",
    tagColor: "bg-amber-100 text-amber-700",
    title: '"Kelajak Soati" – Future Hour',
    desc: "Regular spiritual-educational sessions exploring Uzbek history, values, and role models like Amir Temur. Classes combine video lessons with open discussion.",
    icon: BookOpen,
  },
  {
    tag: "Sports",
    tagColor: "bg-rose-100 text-rose-700",
    title: "Healthy Lifestyle Programme",
    desc: "Outdoor health events in nature with athletics, pull-ups, arm wrestling, tug-of-war, and weightlifting. Building healthy habits through teamwork and competition.",
    icon: Dumbbell,
  },
  {
    tag: "International",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Amity University Guest Workshop",
    desc: "A Doctor from Amity University led a workshop for lyceum students, bringing international academic exposure and cross-cultural learning opportunities.",
    icon: Globe,
  },
  {
    tag: "University Visit",
    tagColor: "bg-cyan-100 text-cyan-700",
    title: "TATU University Campus Tour",
    desc: "Lyceum students visited the parent TATU university campus, meeting the rector and senior staff to understand their future academic pathway.",
    icon: GraduationCap,
  },
];

const FACILITIES = [
  { icon: Cpu, label: "3 ta kompyuter sinfi", desc: "IT va dasturlash darslari uchun xalqaro standartdagi kompyuter xonalari" },
  { icon: FlaskConical, label: "Ilmiy laboratoriyalar", desc: "Xalqaro sertifikatga ega kimyo va fizika laboratoriyalari" },
  { icon: Dumbbell, label: "Sport zali va stadion", desc: "Turli sport turlarini o'ynash uchun zamonaviy jihozlar" },
  { icon: BookOpen, label: "450 o'rinli o'quv binosi", desc: "Barcha auditoriyalar zamonaviy ta'lim texnikalari bilan jihozlangan" },
  { icon: Rocket, label: "Startup maydoni", desc: "Har payshanba Startup Klubi mashg'ulotlari o'tadigan maxsus joy" },
  { icon: Music, label: "26 ta to'garak", desc: "STEAM, san'at, sport va madaniyat bo'yicha keng qamrovli to'garaklar" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

      {/* ─── Navbar ──────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 flex items-center justify-center shadow flex-shrink-0">
              <span className="text-white font-black text-xs tracking-tight">TATU</span>
            </div>
            <div className="min-w-0">
              <div className="font-extrabold text-slate-900 tracking-tight leading-none text-sm sm:text-base truncate">
                TATU Akademik Litsey
              </div>
              <div className="text-[10px] text-slate-400 font-medium tracking-wide truncate hidden sm:block">
                Muhammad al-Xorazmiy nomidagi · Toshkent
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {["Haqida", "Dasturlar", "Faoliyat", "Statistika", "Aloqa"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all">
              <Send size={14} /> Telegram
            </a>
            <a href="https://tatual.uz" target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow hover:opacity-90 transition-opacity flex items-center gap-1.5">
              <ExternalLink size={13} /> tatual.uz
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-slate-600">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1">
            {["Haqida", "Dasturlar", "Faoliyat", "Statistika", "Aloqa"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="block text-sm font-semibold text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50">
                {item}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center text-sm font-semibold text-blue-600 border border-blue-200 py-2.5 rounded-lg">
                Telegram
              </a>
              <a href="https://tatual.uz" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold py-2.5 rounded-lg">
                Veb-sayt
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white">
        <div className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')",
            backgroundSize: "cover", backgroundPosition: "center"
          }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/40 to-indigo-950/80" />

        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">

            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/85 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-7">
              <MapPin size={11} /> Toshkent, O'zbekiston · TATU Huzuridagi Akademik Litsey
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-3">
              Muhammad al-Xorazmiy<br />
              nomidagi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300 mt-1">
                TATU Akademik Litsey
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base sm:text-lg text-white/65 leading-relaxed mb-8 max-w-2xl">
              Toshkent axborot texnologiyalari universiteti huzuridagi akademik litsey — IT yo'nalishi bo'yicha chuqur bilim, zamonaviy laboratoriyalar va 26 ta to'garak orqali kelajak mutaxassislarini tayyorlaydi.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a href="#dasturlar"
                className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm flex items-center gap-2">
                Dasturlar va yo'nalishlar <ArrowRight size={15} />
              </a>
              <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all text-sm flex items-center gap-2">
                <Send size={14} /> Telegram kanalimiz
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-black/25 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {STATS.map(({ value, label }) => (
                <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <div className="text-xl sm:text-2xl font-black text-white">{value}</div>
                  <div className="text-[11px] text-white/50 mt-0.5 leading-tight">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────────── */}
      <section id="haqida" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div variants={fadeUp}>
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">Litsey haqida</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-5 mb-5 tracking-tight leading-tight">
                IT yo'nalishida<br />
                <span className="text-blue-600">kelajakka poydevor</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 text-base">
                O'zbekiston Respublikasi Prezidentining 2017-yil 26-sentyabrdagi PQ-3290-sonli Qarori asosida tashkil etilgan akademik litsey, Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti (TATU) tarkibiga kiradi.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                450 o'rinli o'quv binosi barcha zamonaviy ta'lim texnikalari bilan jihozlangan. 3 ta kompyuter sinfi, kimyo va fizika laboratoriyalari xalqaro standartlarga to'liq javob beradi.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Tashkil etilgan", val: "2017-yil, 26-sentabr" },
                  { label: "Joylashuv", val: "Toshkent, O'zbekiston" },
                  { label: "Sig'imi", val: "450 o'quvchi" },
                  { label: "To'garaklar", val: "26 ta faol to'garak" },
                ].map(({ label, val }) => (
                  <div key={label} className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="text-xs text-slate-400 font-medium mb-1">{label}</div>
                    <div className="text-sm font-bold text-slate-900">{val}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {/* Facilities grid */}
              <div className="grid grid-cols-2 gap-4">
                {FACILITIES.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm mb-1">{label}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Programs ────────────────────────────────────────── */}
      <section id="dasturlar" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full">Ta'lim yo'nalishlari</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3 tracking-tight">
                Dasturlar va to'garaklar
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base">
                Axborot texnologiyalari universitetining litseyida nazariy bilim amaliyot bilan uyg'unlashadi. Har bir o'quvchi o'z qiziqishiga mos yo'nalishda rivojlanadi.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROGRAMS.map(({ icon: Icon, color, name, desc }) => (
                <motion.div key={name} variants={fadeUp}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-all group cursor-default">
                  <div className={`w-12 h-12 rounded-xl border ${color} flex items-center justify-center mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-2">{name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Activities ──────────────────────────────────────── */}
      <section id="faoliyat" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">Litsey hayoti</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3 tracking-tight">
                Faoliyat va tadbirlar
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base">
                O'quvchilarimiz sinf devorlari ortida ham faol! Tadbirlar, sayohatlar, musobaqalar va xalqaro loyihalar — barchasi Telegram kanalimizda yoritiladi.
              </p>
            </motion.div>

            {/* Tab selector */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-8">
              {ACTIVITIES.map((act, i) => (
                <button key={i} onClick={() => setActiveActivity(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeActivity === i
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                  {act.tag}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={activeActivity}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl p-8 lg:p-12 text-white flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {(() => { const Icon = ACTIVITIES[activeActivity].icon; return <Icon size={28} className="text-white" />; })()}
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white mb-3 inline-block`}>
                    {ACTIVITIES[activeActivity].tag}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                    {ACTIVITIES[activeActivity].title}
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed max-w-2xl">
                    {ACTIVITIES[activeActivity].desc}
                  </p>
                  <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:shadow-md transition-shadow">
                    <Send size={14} /> Telegramda ko'rish
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Grid of all activities */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {ACTIVITIES.map((act, i) => {
                const Icon = act.icon;
                return (
                  <motion.button key={i} variants={fadeUp} onClick={() => setActiveActivity(i)}
                    className={`text-left p-5 rounded-2xl border transition-all group ${activeActivity === i
                      ? "border-blue-300 bg-blue-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Icon size={16} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${act.tagColor} block w-fit mb-1`}>
                          {act.tag}
                        </span>
                        <div className="font-bold text-slate-900 text-sm leading-snug">{act.title}</div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Graduation Stats ────────────────────────────────── */}
      <section id="statistika" className="py-20 bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full">O'quv natijalari</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-4 mb-3 tracking-tight">
                3 yillik bitiruvchi statistikasi
              </h2>
              <p className="text-white/55 max-w-lg mx-auto text-base">
                Har yili ko'proq o'quvchi oliy ta'lim muassasalariga kirish imkoniga ega bo'lmoqda. 2023-yilda 90% qabul ko'rsatkichiga erishildi.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {GRADUATION.map(({ year, rate, graduates, placed, note }) => (
                <motion.div key={year} variants={fadeUp}
                  className="bg-white/8 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/12 transition-all">
                  <div className="text-5xl font-black text-white mb-1">{rate}%</div>
                  <div className="text-sm text-white/50 mb-6">OTMga kirish darajasi</div>

                  <div className="space-y-3 text-left">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">Yil</span>
                      <span className="font-bold text-white">{year}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">Bitiruvchilar</span>
                      <span className="font-bold text-white">{graduates}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">OTMga kirganlar</span>
                      <span className="font-bold text-emerald-400">{placed}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 bg-white/10 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 transition-all"
                      style={{ width: `${rate}%` }} />
                  </div>
                  <div className="text-xs text-white/35 mt-2">{note}</div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}
              className="mt-10 bg-white/6 border border-white/10 rounded-3xl p-8 grid sm:grid-cols-4 gap-6 text-center">
              {[
                { val: "840", label: "Jami bitiruvchilar (2021–2023)" },
                { val: "579", label: "OTMga kirganlar" },
                { val: "69%", label: "3 yillik o'rtacha ko'rsatkich" },
                { val: "90%", label: "Eng yuqori ko'rsatkich (2023)" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-black text-white">{val}</div>
                  <div className="text-xs text-white/45 mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Why TATU Litsey ─────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full">Nima uchun TATU Litsey?</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3 tracking-tight">
                Afzalliklarimiz
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Cpu, color: "bg-blue-600", title: "IT Universitetiga ulangan", desc: "TATU kampusiga to'g'ridan-to'g'ri kirish, lab va professor-o'qituvchilardan foydalanish imkoni." },
                { icon: TrendingUp, color: "bg-violet-600", title: "O'sib borayotgan natijalar", desc: "2021—2023 yillarda OTMga qabul ko'rsatkichi 81% dan 90% ga oshdi." },
                { icon: Globe, color: "bg-emerald-600", title: "Xalqaro tajriba", desc: "Amity universiteti, School 21 va chet el mehmonlari bilan hamkorlik dasturlari." },
                { icon: Star, color: "bg-orange-500", title: "26 ta to'garak", desc: "Dasturlashdan tortib sportgacha — har bir o'quvchi o'z passioni bilan shug'ullana oladi." },
              ].map(({ icon: Icon, color, title, desc }) => (
                <motion.div key={title} variants={fadeUp}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all">
                  <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact ─────────────────────────────────────────── */}
      <section id="aloqa" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">Bog'lanish</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3 tracking-tight">
                Biz bilan aloqa
              </h2>
              <p className="text-slate-500 text-base max-w-md mx-auto">
                Qabul, dasturlar yoki boshqa savollar bo'yicha murojaat qiling — javob berishdan mamnunmiz.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                {
                  icon: Globe,
                  label: "Rasmiy veb-sayt",
                  value: "tatual.uz",
                  href: "https://tatual.uz",
                  color: "bg-blue-50 text-blue-600 border-blue-100",
                },
                {
                  icon: Send,
                  label: "Telegram kanal",
                  value: "@tatu_akademik_litseyi",
                  href: "https://t.me/tatu_akademik_litseyi",
                  color: "bg-cyan-50 text-cyan-600 border-cyan-100",
                },
                {
                  icon: MapPin,
                  label: "Manzil",
                  value: "Toshkent, O'zbekiston · TATU kampusi",
                  href: "https://maps.google.com/?q=Tashkent+University+of+Information+Technology",
                  color: "bg-rose-50 text-rose-600 border-rose-100",
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <motion.a key={label} variants={fadeUp} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-7 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-md transition-all group">
                  <div className={`w-13 h-13 w-12 h-12 ${color} border rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-widest">{label}</div>
                  <div className="font-bold text-slate-900 text-sm">{value}</div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={fadeUp}
              className="bg-gradient-to-r from-blue-600 to-violet-700 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h3 className="text-2xl font-black mb-3">Telegram kanalimizga obuna bo'ling</h3>
              <p className="text-white/70 mb-7 max-w-lg mx-auto">
                Litsey yangiliklari, tadbirlar surati, o'quvchi yutuqlari va e'lonlar — barchasi @tatu_akademik_litseyi kanalida real vaqtda.
              </p>
              <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-black px-8 py-4 rounded-2xl text-base hover:opacity-95 hover:shadow-lg transition-all">
                <Send size={18} /> Telegramda ochish
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs">TATU</span>
            </div>
            <div>
              <div className="font-black text-sm">TATU Akademik Litsey</div>
              <div className="text-xs text-slate-400">Muhammad al-Xorazmiy nomidagi · tatual.uz</div>
            </div>
          </div>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a href="https://tatual.uz" target="_blank" rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              <Globe size={12} /> tatual.uz
            </a>
            <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              <Send size={12} /> Telegram
            </a>
          </div>

          <div className="text-xs text-slate-600 text-center sm:text-right">
            © 2025 TATU Akademik Litsey · Barcha huquqlar himoyalangan
          </div>
        </div>
      </footer>
    </div>
  );
}
