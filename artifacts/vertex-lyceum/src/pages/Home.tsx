import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/i18n";
import {
  BookOpen, GraduationCap, MapPin, Users, Award, ChevronRight,
  CheckCircle, ArrowRight, Globe, Cpu, FlaskConical, Trophy,
  Building2, Star, Menu, X, TrendingUp, Rocket,
  Dumbbell, Music, Code2, Microscope, Send, Sun, Moon,
  Instagram, Facebook, Youtube, Newspaper, ClipboardList, Target
} from "lucide-react";

// ─── Animation variants ────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

// ─── Graduation data ────────────────────────────────────────────────────────

const GRADUATION_DATA = [
  { year: "2021", rate: 81, graduates: 239, placed: 19 },
  { year: "2022", rate: 85, graduates: 211, placed: 190 },
  { year: "2023", rate: 90, graduates: 390, placed: 370 },
];

// ─── Program icons ──────────────────────────────────────────────────────────

const PROGRAM_ICONS = [Cpu, FlaskConical, Microscope, Rocket, Dumbbell, Music];
const PROGRAM_COLORS = [
  "text-violet-600 bg-violet-50 border-violet-100 dark:bg-violet-950 dark:border-violet-800",
  "text-emerald-600 bg-emerald-50 border-emerald-100 dark:bg-emerald-950 dark:border-emerald-800",
  "text-blue-600 bg-blue-50 border-blue-100 dark:bg-blue-950 dark:border-blue-800",
  "text-orange-600 bg-orange-50 border-orange-100 dark:bg-orange-950 dark:border-orange-800",
  "text-rose-600 bg-rose-50 border-rose-100 dark:bg-rose-950 dark:border-rose-800",
  "text-indigo-600 bg-indigo-50 border-indigo-100 dark:bg-indigo-950 dark:border-indigo-800",
];
const ACTIVITY_ICONS = [Rocket, Code2, BookOpen, Dumbbell, Globe, GraduationCap];
const ACTIVITY_TAG_COLORS = [
  "bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300",
  "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
];
const ACHIEVE_ICONS = [Award, Code2, FlaskConical, Cpu, Rocket, Trophy];
const ACHIEVE_COLORS = [
  "bg-amber-500", "bg-blue-600", "bg-emerald-600", "bg-violet-600", "bg-orange-500", "bg-rose-600",
];
const FAC_ICONS = [Cpu, FlaskConical, Dumbbell, BookOpen, Rocket, Music];
const WHY_ICONS = [Cpu, TrendingUp, Globe, Star];
const WHY_COLORS = ["bg-blue-600", "bg-violet-600", "bg-emerald-600", "bg-orange-500"];

const SOCIAL_LINKS = [
  {
    Icon: Send,
    name: "Telegram",
    handle: "@tatu_akademik_litseyi",
    href: "https://t.me/tatu_akademik_litseyi",
    color: "bg-[#229ED9]",
    desc: { uz: "Asosiy kanal — yangiliklar, e'lonlar, tadbir suratlari", en: "Main channel — news, announcements, event photos", ru: "Основной канал — новости, объявления, фото событий" },
  },
  {
    Icon: Instagram,
    name: "Instagram",
    handle: "@tatu_lyceum",
    href: "https://www.instagram.com/tatu_lyceum/",
    color: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
    desc: { uz: "O'quvchilar hayoti, sport va madaniy tadbirlar", en: "Student life, sports and cultural events", ru: "Жизнь учащихся, спорт и культурные мероприятия" },
  },
  {
    Icon: Facebook,
    name: "Facebook",
    handle: "tatu_akademik_litsey",
    href: "https://www.facebook.com/tatu_akademik_litsey",
    color: "bg-[#1877F2]",
    desc: { uz: "Rasmiy e'lonlar, yangiliklar va bitiruvchilar", en: "Official announcements, news and alumni updates", ru: "Официальные объявления, новости и выпускники" },
  },
];

// ─── Navbar ─────────────────────────────────────────────────────────────────

function Navbar() {
  const { t, lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const LANGS: { code: Lang; label: string }[] = [
    { code: "uz", label: "UZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  const navItems = [
    { label: t.nav.about, href: "#haqida" },
    { label: t.nav.programs, href: "#dasturlar" },
    { label: t.nav.activities, href: "#faoliyat" },
    { label: t.nav.achievements, href: "#yutuqlar" },
    { label: t.nav.admission, href: "#qabul" },
    { label: t.nav.contact, href: "#aloqa" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 flex items-center justify-center shadow flex-shrink-0">
            <span className="text-white font-black text-xs tracking-tight">TATU</span>
          </div>
          <div className="min-w-0 hidden sm:block">
            <div className="font-extrabold text-slate-900 dark:text-white tracking-tight leading-none text-sm truncate">
              TATU Akademik Litsey
            </div>
            <div className="text-[10px] text-slate-400 font-medium tracking-wide truncate">
              Muhammad al-Xorazmiy nomidagi · Toshkent
            </div>
          </div>
          <div className="min-w-0 sm:hidden">
            <div className="font-extrabold text-slate-900 dark:text-white tracking-tight text-sm">TATU</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-5">
          {navItems.map(item => (
            <a key={item.label} href={item.href}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap">
              {item.label}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 gap-0.5">
            {LANGS.map(({ code, label }) => (
              <button key={code} onClick={() => setLang(code)}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${lang === code
                  ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}>
                {label}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-4 py-4 space-y-1">
          {navItems.map(item => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 dark:text-slate-200 py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
              {item.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-sm font-semibold text-blue-600 border border-blue-200 dark:border-blue-800 py-2.5 rounded-lg">
              Telegram
            </a>
            <a href="https://www.instagram.com/tatu_lyceum/" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-semibold py-2.5 rounded-lg">
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Section badge ──────────────────────────────────────────────────────────

function Badge({ text, color = "blue" }: { text: string; color?: string }) {
  const map: Record<string, string> = {
    blue: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950",
    violet: "text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-950",
    emerald: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950",
    amber: "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950",
    orange: "text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-950",
    rose: "text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-950",
  };
  return (
    <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${map[color] ?? map.blue}`}>
      {text}
    </span>
  );
}

// ─── Main Home component ────────────────────────────────────────────────────

export default function Home() {
  const { t, lang } = useLang();
  const [activeActivity, setActiveActivity] = useState(0);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased transition-colors">

      <Navbar />

      {/* ═══ HERO ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white">
        {/* Background image */}
        <div className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')",
            backgroundSize: "cover", backgroundPosition: "center"
          }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/40 to-indigo-950/80" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">

            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/85 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <MapPin size={11} /> {t.hero.badge}
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-4">
              {t.hero.title1}{" "}
              <span className="italic text-blue-200">{t.hero.title2}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300 mt-2">
                {t.hero.title3}
              </span>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl text-white/65 leading-relaxed mb-10 max-w-2xl">
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a href="#dasturlar"
                className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm flex items-center gap-2">
                {t.hero.cta1} <ArrowRight size={15} />
              </a>
              <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all text-sm flex items-center gap-2">
                <Send size={14} /> {t.hero.cta2}
              </a>
              <a href="#ijtimoiy"
                className="bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all text-sm flex items-center gap-2">
                <Instagram size={14} /> {t.hero.cta3}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-black/25 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {t.stats.map(({ value, label }) => (
                <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white">{value}</div>
                  <div className="text-[11px] text-white/50 mt-0.5 leading-tight">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ══════════════════════════════════════════════════════════════ */}
      <section id="haqida" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-start">

            <motion.div variants={fadeUp}>
              <Badge text={t.about.badge} color="blue" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-5 mb-5 tracking-tight leading-tight">
                {t.about.title1}<br />
                <span className="text-blue-600">{t.about.title2}</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5 text-base">{t.about.p1}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-base">{t.about.p2}</p>

              <div className="grid grid-cols-2 gap-3">
                {t.about.items.map(({ label, val }) => (
                  <div key={label} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <div className="text-xs text-slate-400 font-medium mb-1">{label}</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{val}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {/* Mission pillars */}
              <div className="mb-6">
                <Badge text={t.mission.badge} color="violet" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4 mb-5">{t.mission.title}</h3>
              </div>
              {t.mission.items.map(({ title, desc }, i) => {
                const icons = [Target, Cpu, Star];
                const Icon = icons[i];
                const colors = ["bg-blue-600", "bg-violet-600", "bg-emerald-600"];
                return (
                  <div key={title} className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
                    <div className={`w-10 h-10 ${colors[i]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">{title}</div>
                      <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FACILITIES ════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <Badge text={t.facilities.badge} color="emerald" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
                {t.facilities.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">{t.facilities.subtitle}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.facilities.items.map(({ label, desc }, i) => {
                const Icon = FAC_ICONS[i];
                return (
                  <motion.div key={label} variants={fadeUp}
                    className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm mb-2">{label}</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROGRAMS ══════════════════════════════════════════════════════════ */}
      <section id="dasturlar" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <Badge text={t.programs.badge} color="violet" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
                {t.programs.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">{t.programs.subtitle}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.programs.items.map(({ name, desc }, i) => {
                const Icon = PROGRAM_ICONS[i];
                return (
                  <motion.div key={name} variants={fadeUp}
                    className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-md transition-all group cursor-default">
                    <div className={`w-12 h-12 rounded-xl border ${PROGRAM_COLORS[i]} flex items-center justify-center mb-4`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-black text-slate-900 dark:text-white text-base mb-2">{name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ACTIVITIES ════════════════════════════════════════════════════════ */}
      <section id="faoliyat" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-12">
              <Badge text={t.activities.badge} color="emerald" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
                {t.activities.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">{t.activities.subtitle}</p>
            </motion.div>

            {/* Tab buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-8">
              {t.activities.items.map((act, i) => (
                <button key={i} onClick={() => setActiveActivity(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeActivity === i
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"}`}>
                  {act.tag}
                </button>
              ))}
            </motion.div>

            {/* Featured activity */}
            <AnimatePresence mode="wait">
              <motion.div key={activeActivity}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl p-8 lg:p-12 text-white flex flex-col lg:flex-row gap-8 items-start mb-6">
                <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {(() => { const Icon = ACTIVITY_ICONS[activeActivity]; return <Icon size={28} className="text-white" />; })()}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white mb-3 inline-block">
                    {t.activities.items[activeActivity].tag}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                    {t.activities.items[activeActivity].title}
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed max-w-2xl">
                    {t.activities.items[activeActivity].desc}
                  </p>
                  <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:shadow-md transition-shadow">
                    <Send size={14} /> {t.activities.viewMore}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Activity grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.activities.items.map((act, i) => {
                const Icon = ACTIVITY_ICONS[i];
                return (
                  <motion.button key={i} variants={fadeUp} onClick={() => setActiveActivity(i)}
                    className={`text-left p-5 rounded-2xl border transition-all group ${activeActivity === i
                      ? "border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950 shadow-sm"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm"}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-slate-500 dark:text-slate-400" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${ACTIVITY_TAG_COLORS[i]} block w-fit mb-1`}>
                          {act.tag}
                        </span>
                        <div className="font-bold text-slate-900 dark:text-white text-sm leading-snug">{act.title}</div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ACHIEVEMENTS ══════════════════════════════════════════════════════ */}
      <section id="yutuqlar" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <Badge text={t.achievements.badge} color="amber" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
                {t.achievements.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">{t.achievements.subtitle}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.achievements.items.map(({ title, desc, tag }, i) => {
                const Icon = ACHIEVE_ICONS[i];
                return (
                  <motion.div key={title} variants={fadeUp}
                    className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-11 h-11 ${ACHIEVE_COLORS[i]} rounded-xl flex items-center justify-center`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    </div>
                    <h3 className="font-black text-slate-900 dark:text-white text-base mb-2">{title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ GRADUATION STATS ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full">
                {t.graduation.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mt-4 mb-3 tracking-tight">{t.graduation.title}</h2>
              <p className="text-white/55 max-w-lg mx-auto text-base">{t.graduation.subtitle}</p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {GRADUATION_DATA.map(({ year, rate, graduates, placed }, idx) => (
                <motion.div key={year} variants={fadeUp}
                  className="bg-white/8 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/12 transition-all">
                  <div className="text-5xl font-black text-white mb-1">{rate}%</div>
                  <div className="text-sm text-white/50 mb-6">{t.graduation.rate}</div>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">{t.graduation.year}</span>
                      <span className="font-bold text-white">{year}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">{t.graduation.graduates}</span>
                      <span className="font-bold text-white">{graduates}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">{t.graduation.placed}</span>
                      <span className="font-bold text-emerald-400">{placed}</span>
                    </div>
                  </div>
                  <div className="mt-6 bg-white/10 rounded-full h-2">
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" style={{ width: `${rate}%` }} />
                  </div>
                  <div className="text-xs text-white/35 mt-2">{t.graduation.notes[idx]}</div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}
              className="mt-10 bg-white/6 border border-white/10 rounded-3xl p-8 grid sm:grid-cols-4 gap-6 text-center">
              {t.graduation.summary.map(({ val, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-black text-white">{val}</div>
                  <div className="text-xs text-white/45 mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <Badge text={t.why.badge} color="orange" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
                {t.why.title}
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.why.items.map(({ title, desc }, i) => {
                const Icon = WHY_ICONS[i];
                return (
                  <motion.div key={title} variants={fadeUp}
                    className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className={`w-11 h-11 ${WHY_COLORS[i]} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-black text-slate-900 dark:text-white text-base mb-2">{title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ADMISSION ══════════════════════════════════════════════════════════ */}
      <section id="qabul" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <Badge text={t.admission.badge} color="blue" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
                {t.admission.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">{t.admission.subtitle}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {t.admission.steps.map(({ n, title, desc }) => (
                <motion.div key={n} variants={fadeUp}
                  className="relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                  <div className="text-5xl font-black text-slate-100 dark:text-slate-800 absolute top-4 right-4 leading-none select-none">
                    {n}
                  </div>
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <ClipboardList size={18} className="text-white" />
                    </div>
                    <h3 className="font-black text-slate-900 dark:text-white text-base mb-2">{title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp}
              className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <Send size={16} className="text-white" />
              </div>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">{t.admission.note}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SOCIAL MEDIA ══════════════════════════════════════════════════════ */}
      <section id="ijtimoiy" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <Badge text={t.social.badge} color="rose" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
                {t.social.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">{t.social.subtitle}</p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {SOCIAL_LINKS.map(({ Icon, name, handle, href, color, desc }) => (
                <motion.a key={name} variants={fadeUp} href={href} target="_blank" rel="noopener noreferrer"
                  className="group block bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="font-black text-slate-900 dark:text-white text-lg mb-1">{name}</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">{handle}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                    {desc[lang as keyof typeof desc]}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t.social.cta} <ArrowRight size={14} />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTACT ════════════════════════════════════════════════════════════ */}
      <section id="aloqa" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeUp} className="text-center mb-14">
              <Badge text={t.contact.badge} color="blue" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
                {t.contact.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base max-w-md mx-auto">{t.contact.subtitle}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { Icon: Send, color: "bg-[#229ED9] text-white", border: "border-sky-200 dark:border-sky-800", href: "https://t.me/tatu_akademik_litseyi" },
                { Icon: Instagram, color: "bg-gradient-to-br from-pink-500 to-orange-500 text-white", border: "border-pink-200 dark:border-pink-800", href: "https://www.instagram.com/tatu_lyceum/" },
                { Icon: Facebook, color: "bg-[#1877F2] text-white", border: "border-blue-200 dark:border-blue-800", href: "https://www.facebook.com/tatu_akademik_litsey" },
                { Icon: MapPin, color: "bg-rose-500 text-white", border: "border-rose-200 dark:border-rose-800", href: "#" },
              ].map(({ Icon, color, border, href }, i) => (
                <motion.a key={i} variants={fadeUp} href={href} target={href !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                  className={`flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-900 border ${border} rounded-2xl hover:shadow-md transition-all group`}>
                  <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-widest">
                    {t.contact.items[i].label}
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white text-xs">{t.contact.items[i].val}</div>
                </motion.a>
              ))}
            </div>

            {/* Telegram CTA */}
            <motion.div variants={fadeUp}
              className="bg-gradient-to-r from-blue-600 to-violet-700 rounded-3xl p-8 lg:p-12 text-white text-center">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Send size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-3">{t.contact.telegramTitle}</h3>
              <p className="text-white/70 mb-7 max-w-lg mx-auto">{t.contact.telegramDesc}</p>
              <a href="https://t.me/tatu_akademik_litseyi" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-black px-8 py-4 rounded-2xl text-base hover:opacity-95 hover:shadow-lg transition-all">
                <Send size={18} /> {t.contact.telegramCta}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═════════════════════════════════════════════════════════════ */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs">TATU</span>
              </div>
              <div>
                <div className="font-black text-sm text-white">{t.footer.name}</div>
                <div className="text-xs text-slate-400">{t.footer.sub}</div>
                <div className="text-xs text-blue-400 mt-0.5">{t.footer.official}</div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Send, href: "https://t.me/tatu_akademik_litseyi", label: "Telegram" },
                { Icon: Instagram, href: "https://www.instagram.com/tatu_lyceum/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/tatu_akademik_litsey", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={label}>
                  <Icon size={16} className="text-slate-300" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-xs text-slate-500 text-center lg:text-right">
              © {new Date().getFullYear()} TATU Akademik Litsey<br />
              {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
