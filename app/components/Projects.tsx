"use client";
import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AutoFounder AI",
    description:
      "Autonomous multi-agent platform that validates startup ideas, builds MVPs, and launches products to market — full software lifecycle automation from idea to production.",
    tags: ["Multi-Agent AI", "A2A Systems", "Next.js", "FastAPI", "AWS EKS", "LLMOps"],
    category: "Agentic AI",
    color: "from-cyan-500 to-violet-600",
    type: "work",
  },
  {
    name: "Knovera — Enterprise Knowledge Discovery",
    description:
      "Enterprise-grade RAG platform (Gemini + Pinecone) with policy-driven API governance, PII redaction, and multi-region failover for production-grade knowledge retrieval.",
    tags: ["RAG", "Gemini", "Pinecone", "FastAPI", "Terraform", "Enterprise AI"],
    category: "Generative AI",
    color: "from-violet-500 to-indigo-600",
    type: "work",
  },
  {
    name: "DocMiner — RAG & LegalGraph Platform",
    description:
      "MCP-based enterprise AI orchestration with Graph-RAG (Neo4j + vector DBs), A2A reasoning systems, and Responsible AI controls for HR, legal, and research use cases.",
    tags: ["Graph-RAG", "Neo4j", "MCP", "A2A", "React", "LLMOps"],
    category: "Enterprise AI",
    color: "from-emerald-500 to-teal-600",
    type: "work",
  },
  {
    name: "NaviOwl CareGraph Platform",
    description:
      "Healthcare & research AI platform with multi-agent A2A reasoning, MCP-based orchestration, and Graph-RAG pipelines. Scaled from MVP to multi-tenant enterprise architecture.",
    tags: ["Healthcare AI", "Graph-RAG", "Neo4j", "FastAPI", "React", "Responsible AI"],
    category: "Healthcare AI",
    color: "from-sky-500 to-blue-600",
    type: "work",
  },
  {
    name: "Quantum-AI Cancer Detection",
    description:
      "Early cancer detection framework using hybrid quantum–classical models (VQE/HHL), validated on real quantum hardware. Includes p53 mutation hotspot modeling and molecular intelligence.",
    tags: ["Qiskit", "VQE", "HHL", "Quantum ML", "Python", "Healthcare"],
    category: "Quantum AI",
    color: "from-fuchsia-500 to-violet-600",
    type: "work",
  },
  {
    name: "Guardrail-AI-Template",
    description:
      "Enterprise Guardrail Framework Template for LLMs & Agentic Systems based on a 6-Layer Defence Architecture. Production-ready safety and governance template.",
    tags: ["Responsible AI", "LLM Safety", "Guardrails", "Python", "Enterprise"],
    category: "AI Governance",
    color: "from-rose-500 to-orange-600",
    github: "https://github.com/asit-piri/Guradrail-AI-Template",
    type: "github",
  },
  {
    name: "Agentic Knowledge-To-Action",
    description:
      "AI Gateway and registry layer that unifies MCP, A2A, REST, and gRPC services behind a single managed endpoint — a unified interface for agentic AI systems.",
    tags: ["MCP", "A2A", "REST", "gRPC", "API Gateway", "Python"],
    category: "Agentic AI",
    color: "from-cyan-500 to-emerald-600",
    github: "https://github.com/asit-piri/Agentic-Knowledge-To-Action",
    type: "github",
  },
  {
    name: "Sales-Marketing A2A Orchestrator",
    description:
      "Agent-to-Agent orchestration system for sales and marketing automation, enabling collaborative AI agents to drive end-to-end business workflows.",
    tags: ["A2A", "Multi-Agent", "Sales AI", "Python", "Orchestration"],
    category: "Agentic AI",
    color: "from-amber-500 to-orange-600",
    github: "https://github.com/asit-piri/Sales-Marketing-A2A-Orchestrator",
    type: "github",
  },
  {
    name: "AWS Deployment Automation E2E",
    description:
      "End-to-end deployment automation using AWS services — full CI/CD pipeline with infrastructure as code, security scanning, and fail-safe rollback mechanisms.",
    tags: ["AWS", "Shell", "CI/CD", "Terraform", "DevOps", "IaC"],
    category: "DevOps / MLOps",
    color: "from-orange-500 to-amber-600",
    github: "https://github.com/asit-piri/Asit-AWS-Deployment-Automation-EndToEnd-V2.0",
    type: "github",
  },
  {
    name: "ResolveAI",
    description:
      "AI-powered resolution and problem-solving platform. Intelligent automation for complex enterprise decision workflows.",
    tags: ["Generative AI", "Python", "Enterprise", "Automation"],
    category: "AI Application",
    color: "from-teal-500 to-cyan-600",
    github: "https://github.com/asit-piri/ResolveAI",
    type: "github",
  },
  {
    name: "Cursor Rule Template",
    description:
      "Rule Template for Cursor Integrated Development Environment (IDE) — structured guidelines for AI-assisted development workflows and best practices.",
    tags: ["AI Dev Tools", "Cursor IDE", "Templates", "Developer Productivity"],
    category: "Dev Tools",
    color: "from-indigo-500 to-violet-600",
    github: "https://github.com/asit-piri/Cursor-Rule-Template",
    type: "github",
  },
  {
    name: "67+ GitHub Repositories",
    description:
      "Explore the complete portfolio of AI, data engineering, and full-stack projects spanning Generative AI, Agentic Systems, Quantum Computing, and more.",
    tags: ["AI", "Data Engineering", "Full-Stack", "Quantum", "MLOps"],
    category: "Open Source",
    color: "from-gray-500 to-slate-600",
    github: "https://github.com/asit-piri",
    type: "github",
    isExplore: true,
  },
];

const categoryColors: Record<string, string> = {
  "Agentic AI": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  "Generative AI": "bg-violet-500/15 text-violet-400 border-violet-500/20",
  "Enterprise AI": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Healthcare AI": "bg-sky-500/15 text-sky-400 border-sky-500/20",
  "Quantum AI": "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/20",
  "AI Governance": "bg-rose-500/15 text-rose-400 border-rose-500/20",
  "DevOps / MLOps": "bg-orange-500/15 text-orange-400 border-orange-500/20",
  "AI Application": "bg-teal-500/15 text-teal-400 border-teal-500/20",
  "Dev Tools": "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
  "Open Source": "bg-gray-500/15 text-gray-400 border-gray-500/20",
};

export default function Projects() {
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
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 sm:px-6 lg:px-8 dot-bg"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">{"// what i've built"}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Projects &amp; <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full" />
          <div className="flex items-center gap-6 mt-6">
            <a
              href="https://github.com/asit-piri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              <Github size={16} />
              github.com/asit-piri
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`glass-hover rounded-2xl p-5 flex flex-col transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${proj.isExplore ? "border-dashed" : ""}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                    categoryColors[proj.category] ?? "bg-gray-500/15 text-gray-400 border-gray-500/20"
                  }`}
                >
                  {proj.category}
                </span>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="View on GitHub"
                  >
                    <Github size={15} />
                  </a>
                )}
              </div>

              {/* Gradient bar */}
              <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${proj.color} mb-3`} />

              {/* Name */}
              <h3 className="font-display font-bold text-white text-base leading-snug mb-2">
                {proj.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                {proj.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
