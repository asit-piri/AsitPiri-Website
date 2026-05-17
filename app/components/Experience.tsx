"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    company: "Career Transition & Internship",
    role: "Principal Data Scientist — Full-Stack AI Builder",
    location: "Bengaluru, India (Remote)",
    period: "Mar 2026 – Present",
    current: true,
    color: "from-cyan-500 to-violet-600",
    projects: [
      {
        name: "AutoFounder AI",
        description: "Startup idea → validates → builds MVP → launches to Market",
        highlights: [
          "Architected & launched AutoFounder AI (0→1), an autonomous multi-agent platform automating the full software lifecycle from idea validation to market launch.",
          "Engineered A2A (Agent-to-Agent) system with shared contextual memory, integrating Validator, Architect, Coder, and Marketer agents for end-to-end automation.",
          "Built autonomous self-healing MVP engine generating production-grade stacks (Next.js/FastAPI) with automated Docker testing — weeks to minutes.",
          "Scalable multi-tenant SaaS on AWS (EKS, RDS, S3) with SQS-driven dynamic orchestration for high-concurrency agent workflows.",
          "Established LLMOps & CI/CD pipelines using RLHF and GitHub Actions, improving code quality by 25% with zero-downtime delivery.",
          "Deep observability via Prometheus & Grafana — tracking LLM performance (tokens, latency, hallucination rates) with 100% system transparency.",
        ],
      },
      {
        name: "Knovera",
        description: "Enterprise Knowledge Discovery in the Age of Generative AI",
        highlights: [
          "Architected enterprise-grade RAG platform (Gemini + Pinecone) with high-performance embedding pipelines.",
          "Engineered policy-driven API governance with YAML-based hot-reloading for zero-downtime config changes.",
          "Implemented security-by-design: prompt injection defenses, automated PII redaction, robust authentication.",
          "Designed high-availability architecture with queue-based processing, intelligent caching, and multi-region failover.",
          "Automated full-stack CI/CD and IaC with Terraform, GitHub Actions, and AWS ECS.",
        ],
      },
    ],
  },
  {
    company: "NaviOwl",
    role: "Principal Data Scientist — Full-Stack AI Builder",
    location: "Markham, Canada (Remote)",
    period: "Feb 2026 – Mar 2026",
    current: false,
    color: "from-violet-500 to-indigo-600",
    projects: [
      {
        name: "NaviOwl 2.0 & CareGraph Platform",
        description: "Enterprise AI orchestration platform for healthcare, legal & research",
        highlights: [
          "Led end-to-end architecture of MCP-based enterprise AI orchestration platform enabling modular, scalable AI deployment.",
          "Designed multi-agent A2A reasoning systems and Graph-RAG pipelines (Neo4j + vector DBs) for contextual retrieval.",
          "Established LLMOps governance: benchmarking, evaluation, cost optimisation, and lifecycle controls.",
          "Built CareGraph enterprise AI applications for healthcare, legal, and research using React, FastAPI, and graph/vector architectures.",
          "Scaled from MVP to multi-tenant enterprise architecture with Responsible AI (explainability, auditability, governance).",
        ],
      },
    ],
  },
  {
    company: "Zero State Inc.",
    role: "Principal Data Scientist — Full-Stack Quantum AI Builder",
    location: "Phoenix, USA (Remote)",
    period: "Jan 2026",
    current: false,
    color: "from-sky-500 to-cyan-600",
    projects: [
      {
        name: "Quantum-AI Platforms (Healthcare & Molecular Intelligence)",
        description: "Quantum-AI early cancer detection & molecular intelligence",
        highlights: [
          "Built quantum–AI early cancer detection framework (0→MVP) targeting pre-mutational signal identification.",
          "Architected hybrid quantum–classical models (VQE/HHL-inspired) validated on real quantum hardware (2–4 qubits).",
          "Modeled p53 mutation hotspots using structural biology and computational analysis.",
          "Co-developed molecular intelligence platform for protein–compound interaction ranking using vectorised search.",
        ],
      },
    ],
  },
  {
    company: "ESCRIBA",
    role: "Lead Data Scientist & AI Engineering Lead",
    location: "Bengaluru, India",
    period: "Jul 2023 – Dec 2025",
    current: false,
    color: "from-emerald-500 to-teal-600",
    projects: [
      {
        name: "ECAP Document Automation Platform",
        description: "HR & Legal Document Intelligence — 10+ AI programs, global team",
        highlights: [
          "Built and scaled enterprise AI function (0→10 engineers) delivering 10+ AI programs.",
          "Led multi-cloud LLM benchmarking (AWS, Azure, GCP, HuggingFace): 32% latency reduction, 28% cost savings, 37% performance gains.",
          "Engineered domain-specific LLMs on 1M+ documents achieving 92% Q&A accuracy and 50% reduction in legal workload.",
          "Designed and deployed 8+ Generative AI applications; secured $1.8M+ in AI investments.",
          "Pioneered Graph-RAG + multi-agent systems: 38% retrieval accuracy improvement, 47% error reduction.",
        ],
      },
      {
        name: "DocMiner RAG Platform",
        description: "Enterprise-grade AI orchestration and knowledge retrieval",
        highlights: [
          "Led MCP-based enterprise AI orchestration platform for modular, scalable deployment.",
          "Architected multi-agent A2A reasoning & Graph-RAG pipelines (Neo4j + vector DBs).",
          "Built LegalGraph: enterprise AI for HR, legal, and research (React, FastAPI, graph/vector).",
          "Established Responsible AI controls — explainability, auditability, governance for regulated industries.",
        ],
      },
    ],
  },
  {
    company: "Hewlett Packard Enterprise (HPE)",
    role: "Engineering Program Manager → Senior Data Architect",
    location: "Bengaluru, India",
    period: "Dec 2010 – Sep 2020",
    current: false,
    color: "from-blue-500 to-indigo-600",
    projects: [
      {
        name: "HPE GreenLake & Enterprise Data Platforms",
        description: "Hybrid cloud platform & enterprise data governance",
        highlights: [
          "Led hybrid cloud platform programs (HPE GreenLake): 75% faster deployments, 85% downtime reduction, 40% productivity gains.",
          "Delivered enterprise data platforms & governance frameworks: 35% data reliability improvement, 40% infra over-provisioning reduction.",
          "Led PADL data modernisation, cutting over-provisioning by 40% and enabling 75% faster deployments.",
        ],
      },
    ],
  },
  {
    company: "Previous Experience",
    role: "Senior Consultant → Data Analytics Lead → Senior Software Developer",
    location: "India",
    period: "Jun 2000 – Dec 2010",
    current: false,
    color: "from-gray-500 to-gray-600",
    projects: [
      {
        name: "Career Foundation (10 Years)",
        description: "Capgemini → HCL Technologies → C-DAC → SQL Star → ER&DCI",
        highlights: [
          "Capgemini — Senior Consultant V / Data Architect (Sep 2008 – Dec 2010).",
          "HCL Technologies — Data Analytics Lead (Jul 2007 – Sep 2008).",
          "C-DAC, Noida — Project Associate, Senior Software Developer (Jun 2004 – Jul 2007).",
          "SQL Star International — Software Engineer (Sep 2003 – May 2004).",
          "ER&DCI — Project Associate, Software Developer (Jun 2000 – Sep 2003).",
        ],
      },
    ],
  },
];

function ExperienceCard({
  exp,
  index,
  inView,
}: {
  exp: (typeof experiences)[0];
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative pl-8">
        {/* Timeline dot */}
        <div
          className={`absolute left-0 top-6 w-3.5 h-3.5 rounded-full bg-gradient-to-br ${exp.color} shadow-lg flex-shrink-0`}
          style={{ boxShadow: `0 0 10px rgba(6,182,212,0.4)` }}
        />

        {/* Card */}
        <div className="glass-hover rounded-2xl p-5 sm:p-6 mb-5">
          {/* Header */}
          <div className="flex flex-wrap items-start gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-white text-lg leading-tight">
                  {exp.company}
                </h3>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <p className={`font-medium text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                {exp.role}
              </p>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
            >
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} /> {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} /> {exp.location}
            </span>
          </div>

          {/* Projects */}
          {expanded && (
            <div className="space-y-4">
              {exp.projects.map((proj, pi) => (
                <div key={pi} className="pl-4 border-l-2 border-white/[0.06]">
                  <div className="flex items-start gap-2 mb-2">
                    <div>
                      <div className="text-white font-semibold text-sm">{proj.name}</div>
                      <div className="text-gray-500 text-xs">{proj.description}</div>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {proj.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className="text-cyan-500 mt-1 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050b18]"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">{"// career journey"}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full" />
          <p className="text-gray-500 mt-4">25+ years · 9 organizations · Global roles</p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/[0.06] ml-1.5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
