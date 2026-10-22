"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "CivicFlow",
    category: "UI/UX DESIGN · DIGITAL SERVICES",
    description:
      "Making essential public services easier to discover, understand and access.",
    technologies: ["Research", "Figma", "Accessibility", "Next.js"],
    href: "/projects/civicflow",
    theme: "bg-[#E7EDE5]",
    accent: "text-[#315747]",
    type: "civic"
  },
  {
    number: "02",
    name: "FinBank",
    category: "FRONTEND ENGINEERING · FINTECH",
    description:
      "A modern banking experience designed around clarity, trust and effortless transactions.",
    technologies: ["React", "TypeScript", "CRUD", "Responsive UI"],
    href: "/projects/finbank",
    theme: "bg-[#E8E7FA]",
    accent: "text-[#5546A5]",
    type: "bank"
  }
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX Design",
  "Accessibility",
  "Design Systems"
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sectionIds = [
      "home",
      "work",
      "about",
      "skills",
      "experience",
      "contact"
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#FAF9F6] pt-[76px] text-[#20211F]">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        >
          <a
            href="#home"
            aria-label="Suman Dontha home"
            className="text-2xl font-bold tracking-[-0.08em]"
          >
            SD<span className="text-[#64836D]">.</span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {[
              { label: "Home", id: "home" },
              { label: "Work", id: "work" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Experience", id: "experience" },
              { label: "Contact", id: "contact" }
            ].map(({ label, id }) => {
              const isActive = activeSection === id;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveSection(id)}
                  className={`relative rounded-full px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-emerald-800"
                      : "text-slate-600 hover:text-emerald-800"
                  }`}
                >
                  {label}

                  <span
                    className={`absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-emerald-700 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>
          {/* <div className="hidden items-center gap-8 md:flex">
            <a href="#work" className="nav-link">
              Work
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
          </div> */}

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#20211F] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#47634D] md:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 transition hover:bg-black/5 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-black/5 px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {[
                ["Work", "#work"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Experience", "#experience"],
                ["Contact", "#contact"]
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-32"
      >
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2.5"
          >
            <span className="h-2 w-2 rounded-full bg-[#64836D]" />
            <span className="text-xs font-semibold tracking-[0.12em]">
              UI/UX DESIGNER & FRONTEND DEVELOPER
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.1 }}
            className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.065em] sm:text-6xl lg:text-8xl"
          >
            Designing digital experiences.
            <span className="mt-2 block font-serif font-normal italic text-[#64836D]">
              Building them with code.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl text-base leading-8 text-[#666861] sm:text-lg"
          >
            I&apos;m Suman Dontha. I bring design thinking and frontend
            engineering together to create intuitive, accessible and beautifully
            crafted digital products.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-[#20211F] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#47634D]"
            >
              Explore my work
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-4 text-sm font-medium transition hover:border-[#64836D] hover:text-[#47634D]"
            >
              More about me <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#777970]"
          >
            <span>React & Next.js</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Product Design</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border border-[#64836D]/30" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E5E5DA]">
            <Image
              src="/suman-profile.png"
              alt="Suman Dontha, UI/UX Designer and Frontend Developer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl sm:-left-8">
            <p className="text-xs text-[#777970]">My approach</p>
            <p className="mt-1 text-sm font-semibold">Thoughtful by design.</p>
          </div>
        </motion.div>
      </section>

      {/* Selected work */}
      <section
        id="work"
        className="border-t border-black/5 bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#64836D]">
                A SELECTION OF MY WORK
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
                Selected projects<span className="text-[#64836D]">.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#777970]">
              Exploring how research, design and technology come together to
              solve real problems.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ delay: index * 0.12 }}
                className="group"
              >
                <a href={project.href} className="block">
                  <div
                    className={`relative aspect-[5/4] overflow-hidden rounded-[1.5rem] ${project.theme}`}
                  >
                    <div className="absolute left-6 top-6 z-10 rounded-full bg-white/80 px-4 py-2 text-xs font-medium backdrop-blur">
                      Selected work / {project.number}
                    </div>

                    {project.type === "civic" ? (
                      <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-10">
                        <div className="w-full max-w-sm rotate-[-3deg] rounded-2xl bg-white p-5 shadow-xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 sm:p-7">
                          <div className="flex items-center justify-between border-b border-black/5 pb-4">
                            <span className="font-semibold tracking-tight">
                              CivicFlow
                            </span>
                            <span className="text-xs text-[#64836D]">
                              Your community
                            </span>
                          </div>

                          <p className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">
                            How can we help?
                          </p>

                          <div className="mt-5 grid grid-cols-2 gap-3">
                            {[
                              ["Housing", "Find local support"],
                              ["Money", "Bills and benefits"],
                              ["Family", "Family services"],
                              ["Support", "Get guidance"]
                            ].map(([title, subtitle]) => (
                              <div
                                key={title}
                                className="rounded-xl bg-[#EEF2EB] p-3 sm:p-4"
                              >
                                <p className="text-sm font-semibold">{title}</p>
                                <p className="mt-1 text-[10px] text-[#777970] sm:text-xs">
                                  {subtitle}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-10">
                        <div className="w-full max-w-sm rotate-[3deg] rounded-2xl bg-white p-5 shadow-xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 sm:p-7">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold tracking-tight">
                              FinBank
                            </span>
                            <span className="text-xs text-[#777970]">
                              My account
                            </span>
                          </div>

                          <div className="mt-6 rounded-xl bg-[#25233C] p-5 text-white">
                            <p className="text-xs text-white/70">
                              Available balance
                            </p>
                            <p className="mt-2 text-3xl font-semibold tracking-tight">
                              £12,480.50
                            </p>
                            <div className="mt-5 flex items-center justify-between text-xs text-white/70">
                              <span>Everyday account</span>
                              <span>•••• 2048</span>
                            </div>
                          </div>

                          <p className="mt-5 text-sm font-semibold">
                            Recent transactions
                          </p>

                          {[
                            ["Groceries", "− £42.80"],
                            ["Monthly salary", "+ £2,450.00"],
                            ["Transport", "− £18.50"]
                          ].map(([name, amount]) => (
                            <div
                              key={name}
                              className="flex justify-between border-b border-black/5 py-3 text-xs last:border-0"
                            >
                              <span>{name}</span>
                              <span className="font-medium">{amount}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={21} />
                    </div>
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-xs font-semibold tracking-[0.12em] ${project.accent}`}
                      >
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                        {project.name}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-[#777970]">
                        {project.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      size={24}
                    />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-[#666861]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#25233C] px-5 py-3 text-sm font-medium text-white transition-all duration-300 group-hover:bg-[#47634D]">
                      View Case Study
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#64836D]">
              A LITTLE ABOUT ME
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Design with purpose.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 tracking-tight text-[#4E504A] sm:text-2xl sm:leading-10">
              Great digital products are more than good-looking interfaces. They
              solve problems, make people&apos;s lives easier and work
              beautifully in the real world.
            </p>

            <p className="mt-6 text-base leading-8 text-[#777970]">
              My focus is bringing user-centred thinking together with strong
              frontend engineering. From understanding a problem and shaping an
              interface to implementing responsive components, I care about the
              complete experience.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#64836D] pb-2 text-sm font-semibold transition-colors hover:text-[#64836D]"
            >
              Let&apos;s work together <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-black/5 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#64836D]">
            MY TOOLKIT
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            Skills that bring ideas to life.
          </h2>

          <div className="mt-9 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-full border border-black/10 bg-[#FAF9F6] px-5 py-3 text-sm transition-colors hover:border-[#64836D] hover:bg-[#E7EDE5]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience placeholder */}
      <section id="experience" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#64836D]">
              THE JOURNEY
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Experience & growth.
            </h2>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-9">
            <p className="text-sm leading-7 text-[#777970]">
              This section will present your professional career, key
              responsibilities and selected achievements in a clear timeline.
            </p>
            <p className="mt-4 text-sm font-medium">
              We&apos;ll add your verified experience and dates in the next
              stage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#20211F] py-20 text-white sm:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#B8CDB7]">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.06em] sm:text-7xl">
            Let&apos;s make something{" "}
            <span className="font-serif font-normal italic text-[#B8CDB7]">
              meaningful.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-white/65">
            Interested in working together or discussing an opportunity?
            I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#20211F] transition hover:bg-[#B8CDB7]"
          >
            Get in touch <ArrowUpRight size={18} />
          </a>

          <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center">
            <a href="#home" className="text-xl font-bold tracking-[-0.08em]">
              SD.
            </a>

            <p className="text-xs text-white/50">
              Designed with purpose. Built with care.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              Back to top <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
