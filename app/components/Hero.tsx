"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  ChevronDown,
  Download,
  BookOpen,
  Youtube,
} from "lucide-react";

const ROLES = [
  "Enterprise AI Strategist",
  "Generative & Agentic AI Architect",
  "Principal Data Scientist",
  "Quantum-AI Innovator",
  "Full-Stack AI Builder",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          55
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          30
        );
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dot-bg">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px] animate-blob [animation-delay:3s]" />
        <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-400/5 blur-[80px] animate-blob [animation-delay:5s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Content ── */}
          <div className="order-1 space-y-6 animate-fade-in relative z-10">
            {/* Open to work badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Freelance &amp; Full-time Opportunities
            </div>

            {/* Name */}
            <div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-3">
                <span className="gradient-text">ASIT</span>
                <br />
                <span className="text-white">PIRI</span>
              </h1>
              {/* Typing role */}
              <div className="h-9 flex items-center">
                <p className="text-lg sm:text-xl text-cyan-400 font-medium cursor">
                  {displayed}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Visionary AI leader with{" "}
              <span className="text-white font-semibold">25+ years</span>{" "}
              driving large-scale data, cloud, and AI transformations into
              revenue-generating, production-grade platforms. Architect of
              multi-cloud AI systems securing{" "}
              <span className="text-white font-semibold">$1.8M+</span> in
              strategic investments.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline"
              >
                View Projects
              </a>
              <a
                href="https://www.linkedin.com/in/asit-piri/recent-activity/articles/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <BookOpen size={15} />
                View Articles
              </a>
              <a
                href="https://www.linkedin.com/in/asit-piri/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download size={15} />
                LinkedIn Profile
              </a>
            </div>

            {/* Social / contact links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/asit-piri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Linkedin size={16} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/asit-piri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Github size={16} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.youtube.com/@asitpiri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                <Youtube size={16} />
                <span className="hidden sm:inline">YouTube</span>
              </a>
              <a
                href="mailto:asit.piri@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">asit.piri@gmail.com</span>
              </a>
              <span className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={14} />
                Bengaluru, India
              </span>
            </div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <div className="order-2 flex justify-center lg:justify-end animate-fade-in [animation-delay:200ms]">
            <div className="relative">
              {/* Outer glow ring — circular */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-600/30 blur-2xl animate-pulse-glow" />
              {/* Circular gradient border frame */}
              <div className="relative profile-frame rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Asit Piri — Enterprise AI Strategist"
                  width={480}
                  height={480}
                  priority
                  className="relative z-0 w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] object-cover rounded-full aspect-square"
                  style={{ display: "block" }}
                />
              </div>

              {/* Floating badge — IISc */}
              <div className="absolute -bottom-2 -left-6 z-10 glass rounded-xl px-4 py-3 shadow-lg animate-float [animation-delay:1s]">
                <div className="text-xs text-gray-400 leading-none mb-1">Education</div>
                <div className="text-sm font-semibold text-white leading-none">
                  IISc Deep Learning
                </div>
              </div>

              {/* Floating badge — years */}
              <div className="absolute -top-2 -right-6 z-10 glass rounded-xl px-4 py-3 shadow-lg animate-float">
                <div className="gradient-text font-display font-bold text-2xl leading-none">
                  25+
                </div>
                <div className="text-xs text-gray-400 mt-0.5">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}
