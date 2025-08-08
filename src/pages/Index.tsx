import { useState } from "react";
import AmbientLight from "@/components/portfolio/AmbientLight";
import GlassCard from "@/components/portfolio/GlassCard";
import ProjectCard from "@/components/portfolio/ProjectCard";
import CertificationItem from "@/components/portfolio/CertificationItem";
import SkillBadge from "@/components/portfolio/SkillBadge";
import ContactForm from "@/components/portfolio/ContactForm";
import SectionHeading from "@/components/portfolio/SectionHeading";
import Reveal from "@/components/portfolio/Reveal";
import ProfilePhoto from "@/components/portfolio/ProfilePhoto";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail as MailIcon } from "lucide-react";

// ================= EDIT YOUR DATA BELOW =================
// Replace with your actual details. Keep structure, change values.
const YOUR_NAME = "AKARSH KUMAR";
const TAGLINE = "Aspiring Developer | Project-Focused | Quick Learner";
// TIP: Place your photo in public/profile.jpg or use any image URL
const PROFILE_PHOTO = "/IMG-20250730-WA0041.jpg"; // e.g. "/profile.jpg" or "https://.../me.jpg"
const ABOUT_ME = `I'm a fresher developer passionate about building useful, clean, and performant web apps. I focus on learning modern technologies, writing readable code, and shipping projects. I'm currently exploring React, TypeScript, and backend fundamentals while contributing to open-source and building personal projects.`;

const PROJECTS = [
  {
    title: "Student Submission Form",
    description:
      "A simple Django-based web application that allows students to submit their details via a frontend form. Each student is assigned a unique 8-digit ID upon successful submission. The form includes fields like name, age, course, email, mobile number, and qualification percentage (minimum 75% required).",
    tech: ["Python", "Django", "MongoDB"],
    github: "https://github.com/AkarshKumar27/Studen-Form-Submisson.git",
  },
  {
    title: "Weather checker",
    description:
      "The Weather App is a simple and interactive web application that allows users to search and view real-time weather data for any city around the world. It utilizes the OpenWeatherMap API to fetch current weather information like temperature, humidity, wind speed, and weather conditions.",
    tech: ["HTML5", "CSS3", "JAVASCRIPT"],
    github: "https://github.com/AkarshKumar27/Weather-_.git",
    demo: "https://akarshkumar27.github.io/Weather-_/",
  },
  {
    title: "NEURONEST",
    description:
      "NeuroNest AI is a smart, web-based chatbot designed for empathetic and human-like conversations. Powered by Google's Gemini API, it offers a secure multi-user environment with dynamic personality switching and a sleek modern interface..",
    tech: ["Python", "Gemini API", "Javascript", "CSS"],
    github: "https://github.com/AkarshKumar27/Neuro_Nest.git",
  },
];

const CERTIFICATIONS = [
  { title: "SIC BIG DATA", platform: "SAMSUNG", link: "15.SIC BIG DATA.pdf" },
  { title: "Cyber Secruity", platform: "IIT Madras", link: "17.Swayam Cyber Security IIT Madras.pdf" },
  { title: "Data Anylytics with python", platform: "IIT Kanpur", link: "18. Swayam IITK Certificate Data Analytics with Python.pdf" },
];

const SKILLS = {
  technical: ["JavaScript", "TypeScript", "React", "Node.js", "HTML", "CSS", "Git", "REST APIs"],
  tools: ["VS Code", "Postman", "Figma", "Docker"],
  soft: ["Problem Solving", "Communication", "Teamwork", "Time Management"],
};
// ================= END OF EDITABLE DATA =================

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Index = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      <AmbientLight />

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-3">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight">
            {YOUR_NAME}
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
            <Button asChild size="sm" variant="hero">
              <a href="#contact" aria-label="Jump to contact">
                <MailIcon className="mr-2" /> Contact
              </a>
            </Button>
          </nav>
          <button
            aria-label="Toggle Menu"
            className="md:hidden rounded-md border border-border px-3 py-2"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background/70 backdrop-blur-xl">
            <div className="container flex flex-col py-2">
              {NAV_LINKS.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero / Home */}
        <section id="home" className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                  Fresher Developer Portfolio
                </h1>
                <p className="mt-3 text-lg text-muted-foreground">{TAGLINE}</p>
                <p className="mt-4 text-muted-foreground max-w-prose">
                  Clean, modern, project-first portfolio with certifications and skills.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="hero" size="lg">
                    <a href="#projects">View Projects</a>
                  </Button>
                  <Button asChild variant="glass" size="lg">
                    <a href="https://drive.google.com/file/d/1omD-HhJiDifaR59C9LcMuvHSnzKBwj-q/view?usp=drive_link" target="_blank" rel="noreferrer" download>
                      Download Resume
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://github.com/AkarshKumar27" target="_blank" rel="noreferrer">
                      <Github className="mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://www.linkedin.com/in/akarsh-kumar-/" target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-center gap-6">
                <ProfilePhoto src={PROFILE_PHOTO} name={YOUR_NAME} />
                <GlassCard className="p-8 w-full">
                  <h3 className="text-xl font-semibold mb-2">Hi, I'm {YOUR_NAME} 👋</h3>
                  <p className="text-muted-foreground">
                    {ABOUT_ME}
                  </p>
                </GlassCard>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="container py-16 md:py-24">
          <SectionHeading title="About Me" subtitle="Who I am and what I'm learning" />
          <Reveal>
            <GlassCard className="p-6">
              <p className="text-muted-foreground">
                {ABOUT_ME}
              </p>
            </GlassCard>
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className="container py-16 md:py-24">
          <SectionHeading title="Projects" subtitle="A selection of things I've built" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="container py-16 md:py-24">
          <SectionHeading title="Certifications" subtitle="Verified learning and achievements" />
          <Reveal>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((c) => (
                <CertificationItem key={c.title} {...c} />
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Skills */}
        <section id="skills" className="container py-16 md:py-24">
          <SectionHeading title="Skills" subtitle="Technical, tools, and soft skills" />
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
              <GlassCard className="p-6">
                <h3 className="font-medium mb-3">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.technical.map((s) => (
                    <SkillBadge key={s} label={s} />
                  ))}
                </div>
              </GlassCard>
            </Reveal>
            <Reveal>
              <GlassCard className="p-6">
                <h3 className="font-medium mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.tools.map((s) => (
                    <SkillBadge key={s} label={s} />
                  ))}
                </div>
              </GlassCard>
            </Reveal>
            <Reveal>
              <GlassCard className="p-6">
                <h3 className="font-medium mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.soft.map((s) => (
                    <SkillBadge key={s} label={s} />
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-16 md:py-24">
          <SectionHeading title="Contact" subtitle="Let's connect — I'm open to opportunities and collaborations" />
          <Reveal>
            <ContactForm />
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-5 text-sm">
            {NAV_LINKS.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a
              href="https://github.com/AkarshKumar27"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              aria-label="GitHub profile"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akarsh-kumar-/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
