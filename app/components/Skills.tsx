"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "AI/ML & Advanced AI",
    color: "from-cyan-500 to-cyan-700",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: [
      "Generative AI",
      "Agentic AI",
      "Graph-RAG",
      "Deep Learning",
      "NLP",
      "Transformer Architectures",
      "Reinforcement Learning",
      "Computer Vision",
    ],
  },
  {
    category: "LLMOps & AI Governance",
    color: "from-violet-500 to-violet-700",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    skills: [
      "Model Evaluation & Benchmarking",
      "Prompt Engineering",
      "Fine-tuning",
      "RAG Pipelines",
      "Responsible AI",
      "AI Lifecycle Management",
      "Guardrails & Safety",
    ],
  },
  {
    category: "Cloud & Multi-Cloud AI",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    skills: [
      "AWS Bedrock",
      "AWS SageMaker",
      "Azure ML",
      "GCP Vertex AI",
      "Hugging Face Ecosystem",
      "AWS EKS / ECS",
      "Terraform",
    ],
  },
  {
    category: "Data Engineering & Big Data",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    skills: [
      "Apache Spark",
      "Hadoop",
      "Data Pipelines",
      "ETL / ELT",
      "Distributed Data Processing",
      "Apache Kafka",
    ],
  },
  {
    category: "Databases & Storage",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: [
      "Neo4j (Graph DB)",
      "FAISS (Vector DB)",
      "Pinecone",
      "Weaviate",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    category: "Backend & API Development",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Microservices Architecture",
      "gRPC",
      "MCP Frameworks",
    ],
  },
  {
    category: "Frontend & Full-Stack",
    color: "from-indigo-500 to-violet-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Streamlit",
      "Tailwind CSS",
    ],
  },
  {
    category: "AI Architecture & Systems",
    color: "from-fuchsia-500 to-purple-600",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
    skills: [
      "Multi-Agent Systems (A2A)",
      "MCP Frameworks",
      "Scalable AI Platforms",
      "Enterprise AI Architecture",
      "Agent Orchestration",
    ],
  },
  {
    category: "Quantum Computing",
    color: "from-cyan-400 to-violet-500",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    skills: [
      "Quantum–Classical Hybrid Models",
      "VQE / HHL Algorithms",
      "Qiskit",
      "Molecular Intelligence",
    ],
  },
  {
    category: "MLOps & Tooling",
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    skills: [
      "MLflow",
      "Prometheus",
      "Grafana",
      "Docker",
      "GitHub Actions",
      "CI/CD Pipelines",
      "RLHF",
    ],
  },
];

export default function Skills() {
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
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 sm:px-6 lg:px-8 dot-bg"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">{"// technical arsenal"}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full" />
        </div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`glass-hover rounded-2xl p-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${gi * 60}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`h-1 w-6 rounded-full bg-gradient-to-r ${group.color} flex-shrink-0`}
                />
                <h3 className="font-display font-semibold text-white text-sm leading-tight">
                  {group.category}
                </h3>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
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
