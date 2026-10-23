"use client";

import GradientTxt from "../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { useState } from "react";
import type { Services as ServicesType } from "../../../../types/Services";
import { Bot, Server, Layers, CheckCircle2, Cpu, Database, Code2 } from "lucide-react";

interface ServiceCard {
  _id: string;
  title: string;
  badge: string;
  icon: typeof Bot;
  description: string;
  lists: string[];
}

const DEFAULT_SERVICES: ServiceCard[] = [
  {
    _id: "agentic-ai",
    title: "Autonomous Agentic AI & LLMs",
    badge: "Specialized Focus",
    icon: Bot,
    description:
      "Architecting autonomous multi-agent workflows, tool-calling reasoning loops, and production-grade RAG systems.",
    lists: [
      "CrewAI Multi-Agent Orchestration & Collaborative Roles",
      "AWS Bedrock AgentCore & Foundation Model Integrations",
      "LangChain, Vector Stores & Enterprise RAG Pipelines",
      "Tool-Calling Agents, Function Calling & Structured JSON Outputs",
    ],
  },
  {
    _id: "backend-systems",
    title: "Backend Architecture & Distributed Systems",
    badge: "Core Engineering",
    icon: Server,
    description:
      "Designing resilient RESTful microservices, high-throughput APIs, and optimized relational databases.",
    lists: [
      "High-throughput APIs in Python (FastAPI) & Node.js (Express)",
      "C# .NET Core enterprise backend services & desktop software",
      "Normalized MS SQL Server & PostgreSQL schema design and indexing",
      "JWT Authentication, Docker containerization & automated CI/CD",
    ],
  },
  {
    _id: "fullstack-mobile",
    title: "Full-Stack & Cross-Platform Solutions",
    badge: "Production Ready",
    icon: Layers,
    description:
      "Building high-conversion, accessible web applications and robust mobile systems with seamless state management.",
    lists: [
      "Modern Web Applications in Next.js 14, React, TypeScript & Tailwind CSS",
      "Cross-platform Mobile Development in Flutter/Dart with Bloc Architecture",
      "Custom Workflow Software (C#, WPF, SQL Server) for local business operations",
      "Real-time integrations with Firebase, Supabase & Third-Party APIs",
    ],
  },
];

export default function Services({
  initialServices = [],
}: {
  initialServices?: ServicesType[];
}) {
  return (
    <section id="services" className="mb-[100px]">
      <FadeUp tag="div" className="mb-14">
        <GradientTxt
          tagName="h6"
          txt="SERVICES & EXPERTISE"
          className="mb-4 text-center text-[16px] font-bold tracking-[3px] md:text-[20px]"
        />
        <h2 className="mx-auto mb-6 max-w-[800px] text-center text-[34px] font-bold leading-[115%] tracking-[0.5px] md:text-[50px]">
          Engineering software that solves real problems at scale.
        </h2>
        <p className="mx-auto max-w-[650px] text-center text-[16px] text-[#888] md:text-[18px]">
          From architecting autonomous multi-agent pipelines to engineering resilient backends and intuitive cross-platform applications.
        </p>
      </FadeUp>

      <FadeUp
        tag="div"
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {DEFAULT_SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service._id}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/50 hover:shadow-2xl"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 text-blue-400 transition-colors group-hover:border-neutral-700 group-hover:text-emerald-400">
                    <Icon className="size-7" />
                  </div>
                  <span className="rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs font-medium text-neutral-400">
                    {service.badge}
                  </span>
                </div>

                <h3 className="mb-3 text-[22px] font-bold leading-tight text-white transition-colors group-hover:text-blue-300">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-[#888]">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-neutral-900 pt-6">
                <ul className="space-y-3">
                  {service.lists.map((list, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs font-medium text-neutral-300"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </FadeUp>
    </section>
  );
}
