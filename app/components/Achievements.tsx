"use client";
import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Zap,
  DollarSign,
  Clock,
  Users,
  Shield,
  Target,
  Activity,
} from "lucide-react";

const achievements = [
  {
    icon: Target,
    metric: "40%",
    label: "Operational Efficiency",
    description:
      "Led end-to-end enterprise AI platform strategy (0→production), delivering 40% operational efficiency gains and reducing document processing time by 10 hrs/week via multimodal automation.",
    color: "from-cyan-500 to-teal-600",
    glow: "rgba(6,182,212,0.2)",
  },
  {
    icon: Zap,
    metric: "50%",
    label: "Automation Expansion",
    description:
      "Architected multi-agent Agentic RAG & Graph-RAG ecosystems, expanding automation coverage by 50% and improving contextual accuracy by 35%.",
    color: "from-violet-500 to-fuchsia-600",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: DollarSign,
    metric: "$1.8M+",
    label: "AI Investments Secured",
    description:
      "Designed and deployed 8+ Generative AI applications and secured $1.8M+ in strategic AI investments through proven delivery and business impact.",
    color: "from-emerald-500 to-cyan-600",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    icon: TrendingUp,
    metric: "32%",
    label: "Latency Reduction",
    description:
      "Led multi-cloud LLM benchmarking (AWS, Azure, GCP, HuggingFace) achieving 32% latency reduction, 28% cost savings, and 37% performance improvement.",
    color: "from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.2)",
  },
  {
    icon: Activity,
    metric: "92%",
    label: "Q&A Accuracy",
    description:
      "Engineered domain-specific LLMs trained on 1M+ documents achieving 92% Q&A accuracy and reducing legal workload by 50%.",
    color: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.2)",
  },
  {
    icon: Shield,
    metric: "50%",
    label: "Compliance Improvement",
    description:
      "Established AI governance & lifecycle frameworks, reducing deployment risk by 20% and improving compliance readiness by 50%.",
    color: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.2)",
  },
  {
    icon: Clock,
    metric: "75%",
    label: "Faster Deployments",
    description:
      "Led hybrid cloud & data modernisation (HPE GreenLake, PADL), enabling 75% faster deployments, 25% higher productivity, and 40% reduction in over-provisioning.",
    color: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.2)",
  },
  {
    icon: Users,
    metric: "0→10",
    label: "AI Team Scaled",
    description:
      "Built and scaled enterprise AI function from 0 to 10 engineers globally, establishing LLMOps, Responsible AI frameworks, and delivering 10+ AI programs.",
    color: "from-teal-500 to-emerald-600",
    glow: "rgba(20,184,166,0.2)",
  },
];

export default function Achievements() {
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
      id="achievements"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050b18]"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">{"// impact by numbers"}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, i) => {
            const Icon = ach.icon;
            return (
              <div
                key={i}
                className={`metric-card transition-all duration-700 group ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center mb-4 shadow-lg`}
                  style={{ boxShadow: `0 4px 20px ${ach.glow}` }}
                >
                  <Icon size={20} className="text-white" />
                </div>

                {/* Metric */}
                <div
                  className={`font-display font-black text-3xl sm:text-4xl bg-gradient-to-br ${ach.color} bg-clip-text text-transparent mb-1 leading-none`}
                >
                  {ach.metric}
                </div>

                {/* Label */}
                <div className="text-white font-semibold text-sm mb-3">{ach.label}</div>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed">{ach.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
