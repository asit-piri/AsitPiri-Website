"use client";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "Indian Institute of Science (IISc)",
    degree: "PG Level Advanced Certification",
    field: "Deep Learning & Computational Data Science",
    period: "2023 – 2025",
    color: "from-cyan-500 to-violet-600",
    glow: "rgba(6,182,212,0.15)",
    highlight: true,
  },
  {
    icon: BookOpen,
    institution: "Institute of Product Leadership",
    degree: "Executive MBA",
    field: "Product Leadership & Management",
    period: "2020 – 2023",
    color: "from-violet-500 to-fuchsia-600",
    glow: "rgba(139,92,246,0.15)",
    highlight: false,
  },
  {
    icon: BookOpen,
    institution: "Business School",
    degree: "Executive PGDM",
    field: "Business Analytics & Strategy",
    period: "Post-Graduate",
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.15)",
    highlight: false,
  },
  {
    icon: Award,
    institution: "Interaction Design Foundation",
    degree: "UX Design Certification",
    field: "User Experience Design",
    period: "Professional Cert.",
    color: "from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.15)",
    highlight: false,
  },
];

const certifications = [
  "Learning Digital Painting",
  "Creative & Design Thinking",
  "20 Habits of Executive Leadership",
  "Developing Executive Presence",
  "The Three Pillars of Effective Leadership (Jeff Weiner)",
  "Goal Setting: Objectives & Key Results (OKRs)",
  "Creating a Product-Centric Organization",
  "Successful Negotiation: Essential Strategies and Skills",
  "What to Do in the First 90 Days of Your New Job",
];

export default function Education() {
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
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 sm:px-6 lg:px-8 dot-bg"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">{"// academic background"}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full" />
        </div>

        {/* Education cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={i}
                className={`glass-hover rounded-2xl p-6 flex flex-col relative overflow-hidden transition-all duration-700 ${
                  edu.highlight ? "border border-cyan-500/20" : ""
                } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {edu.highlight && (
                  <div className="absolute top-0 right-0 text-xs px-3 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-bl-xl font-medium">
                    Featured
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-4 shadow-lg flex-shrink-0`}
                  style={{ boxShadow: `0 4px 20px ${edu.glow}` }}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <div className="text-xs text-gray-500 mb-1 font-medium">{edu.period}</div>
                <h3 className="font-display font-bold text-white text-base leading-tight mb-1">
                  {edu.institution}
                </h3>
                <div className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                  {edu.degree}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{edu.field}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className={`transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-display font-semibold text-xl text-white mb-6 flex items-center gap-3">
            <Award size={20} className="text-cyan-500" />
            Leadership &amp; Professional Certifications
          </h3>
          <div className="glass rounded-2xl p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex-shrink-0 mt-1.5" />
                  <span className="text-gray-400 text-sm leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
