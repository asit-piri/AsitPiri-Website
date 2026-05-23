"use client";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Cloud,
  Shield,
  TrendingUp,
  Users,
  Atom,
} from "lucide-react";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience", color: "from-cyan-400 to-cyan-600" },
  { value: 1.8, suffix: "M+", prefix: "$", label: "AI Investments Secured", color: "from-violet-400 to-violet-600" },
  { value: 10, suffix: "+", label: "AI Programs Delivered", color: "from-cyan-400 to-violet-500" },
  { value: 67, suffix: "+", label: "GitHub Repositories", color: "from-violet-500 to-cyan-400" },
];

const competencies = [
  { icon: Brain, label: "Enterprise AI Strategy & Transformation" },
  { icon: Cloud, label: "AI Platform Architecture & Multi-Cloud Optimization" },
  { icon: TrendingUp, label: "Generative AI & Agentic AI Engineering" },
  { icon: Users, label: "Multi-Agent Systems & Orchestration Frameworks" },
  { icon: Shield, label: "AI Governance, Risk & Responsible AI" },
  { icon: Brain, label: "Graph-RAG & Knowledge Graph Ecosystems" },
  { icon: TrendingUp, label: "AI Program Portfolio Management" },
  { icon: Atom, label: "Quantum–AI Hybrid Architecture" },
  { icon: Cloud, label: "LLMOps & AI Lifecycle Management" },
  { icon: TrendingUp, label: "AI Monetization & Platform Commercialization" },
];

function AnimatedCounter({
  target,
  suffix,
  prefix = "",
  inView,
}: {
  target: number;
  suffix: string;
  prefix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display =
    target % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050b18]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">{"// who i am"}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Summary */}
          <div className={`space-y-5 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-gray-300 text-lg leading-relaxed">
              Visionary{" "}
              <span className="gradient-text font-semibold">
                Enterprise AI Strategist and Quantum-AI Architect
              </span>{" "}
              with 25+ years of experience driving large-scale data, cloud, and
              AI transformations into revenue-generating, production-grade
              platforms.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Proven expertise in translating advanced research — Generative AI,
              Agentic AI, Graph-RAG, Quantum–Classical systems — into scalable
              enterprise solutions with measurable business impact.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Architect of multi-cloud AI platforms and AI governance frameworks,
              delivering{" "}
              <span className="text-cyan-400 font-medium">
                30%+ latency improvement
              </span>
              ,{" "}
              <span className="text-cyan-400 font-medium">
                28%+ cost efficiency
              </span>
              , and securing{" "}
              <span className="text-cyan-400 font-medium">
                $1.8M+ strategic investments
              </span>
              .
            </p>
            <p className="text-gray-400 leading-relaxed">
              Global leader in building high-performing AI teams and establishing
              LLMOps, Responsible AI, and enterprise AI adoption frameworks
              across geographies.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/asit-piri/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-5"
              >
                View LinkedIn Profile
              </a>
              <a
                href="https://github.com/asit-piri"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2.5 px-5"
              >
                GitHub Portfolio
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card group flex flex-col items-center justify-center">
                <div
                  className={`font-display font-bold text-3xl sm:text-4xl bg-gradient-to-br ${s.color} bg-clip-text text-transparent mb-2`}
                >
                  <AnimatedCounter
                    target={s.value}
                    suffix={s.suffix}
                    prefix={s.prefix}
                    inView={inView}
                  />
                </div>
                <div className="text-gray-400 text-sm leading-tight text-center">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core competencies */}
        <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-display font-semibold text-xl text-white mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {competencies.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="skill-tag flex items-center gap-2">
                  <Icon size={14} className="text-cyan-500 flex-shrink-0" />
                  {c.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
