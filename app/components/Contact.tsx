"use client";
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Youtube,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "asit.piri@gmail.com",
    href: "mailto:asit.piri@gmail.com",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9538933669",
    href: "tel:+919538933669",
    color: "from-violet-500 to-violet-700",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: null,
    color: "from-emerald-500 to-teal-600",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/asit-piri",
    href: "https://www.linkedin.com/in/asit-piri/",
    color: "from-blue-500 to-blue-700",
    description: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "github.com/asit-piri",
    href: "https://github.com/asit-piri",
    color: "from-gray-600 to-gray-800",
    description: "67+ repositories",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "youtube.com/@asitpiri",
    href: "https://www.youtube.com/@asitpiri",
    color: "from-red-500 to-red-700",
    description: "AI insights & tutorials",
  },
];

const opportunities = [
  "Principal / Chief Data Scientist",
  "AI Architect / Chief AI Officer",
  "Head of AI Engineering",
  "Freelance AI Consulting",
  "Enterprise AI Strategy Advisory",
  "Short-term AI Program Leadership",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050b18]"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[100px]" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">{"// let's work together"}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I&apos;m open to exciting opportunities — whether it&apos;s a freelance project,
            full-time role, advisory engagement, or collaborative AI initiative.
            Let&apos;s build something remarkable together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact info + social */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {/* Contact details */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-semibold text-white text-lg mb-5">
                Contact Details
              </h3>
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">{info.label}</div>
                      <div className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href}>
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white text-lg mb-5">
                Find Me Online
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/4 border border-white/8 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-semibold text-sm">{social.label}</div>
                        <div className="text-gray-500 text-xs truncate">{social.handle}</div>
                      </div>
                      <ArrowRight size={16} className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Open to opportunities */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {/* Open to work card */}
            <div className="relative glass rounded-2xl p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-600/5 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </div>
                  <span className="text-emerald-400 font-semibold">
                    Currently Available
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-xl mb-3">
                  Open to Opportunities
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Actively seeking roles where I can drive AI transformation at scale.
                  Combining deep technical expertise with executive business acumen —
                  available for the right opportunity immediately.
                </p>

                <div className="space-y-2 mb-6">
                  {opportunities.map((opp, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{opp}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:asit.piri@gmail.com"
                  className="btn-primary w-full justify-center"
                >
                  <Send size={16} />
                  Send Me a Message
                </a>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white mb-2">
                    For Freelance Projects
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Need help architecting or building AI systems? I offer consulting
                    on Generative AI, Agentic platforms, Graph-RAG, MLOps, and
                    enterprise AI strategy.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/asit-piri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2.5"
                  >
                    Connect on LinkedIn <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
