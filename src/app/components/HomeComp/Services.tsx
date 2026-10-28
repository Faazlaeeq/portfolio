"use client";

import GradientTxt from "../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { Bot, Server, Layers } from "lucide-react";

interface ServiceItem {
  _id: string;
  title: string;
  description: string;
  icon: typeof Bot;
  lists: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    _id: "agentic-ai",
    title: "Autonomous Agentic AI & LLMs",
    icon: Bot,
    description:
      "Architecting autonomous multi-agent workflows, tool-calling reasoning loops, and production-grade RAG systems:",
    lists: [
      "CrewAI Multi-Agent Orchestration & Collaborative Roles",
      "AWS Bedrock AgentCore & Foundation Model Integrations",
      "LangChain, Vector Stores & Enterprise RAG Pipelines",
      "Autonomous Tool Calling & Structured JSON Outputs",
    ],
  },
  {
    _id: "backend-systems",
    title: "Backend Architecture & Distributed Systems",
    icon: Server,
    description:
      "Designing resilient RESTful microservices, high-throughput APIs, and optimized relational databases:",
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
    icon: Layers,
    description:
      "Building accessible web applications and robust mobile systems with seamless state synchronization:",
    lists: [
      "Modern Web Applications in Next.js 14, React, TypeScript & Tailwind CSS",
      "Cross-platform Mobile Development in Flutter/Dart with Bloc Architecture",
      "Custom Workflow Software (C#, WPF, SQL Server) for local gold refining operations",
      "Real-time integrations with Firebase, Supabase & Third-Party APIs",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-2 lg:py-4">
      <FadeUp tag="div" className="mb-16">
        <GradientTxt
          tagName="h6"
          txt="SKILLS & EXPERTISE"
          className="mb-4 text-center text-[22px] font-bold"
        />
        <h2 className="mx-auto mb-10 max-w-[800px] text-center text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
          Engineering software that solves real problems at scale.
        </h2>
      </FadeUp>

      <FadeUp
        tag="div"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES_DATA.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service._id}>
              <div className="flex size-14 items-center">
                <Icon className="size-10 text-emerald-400" />
              </div>
              <h6 className="my-4 mb-6 text-[19px] font-bold leading-[110%] lg:mt-6">
                {service.title}
              </h6>
              <p className="mb-4 leading-[22px] text-[#666]">
                {service.description}
              </p>
              <ul className="inline-flex flex-col gap-3 pl-5 md:pl-0">
                {service.lists.map((list, i) => (
                  <li key={i} className="list-disc font-bold">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </FadeUp>
    </section>
  );
}
