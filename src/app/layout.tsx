import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: {
    default: "Ahmed Faaz Laeeq | Software Engineer & Agentic AI Specialist",
    template: "%s | Ahmed Faaz Laeeq",
  },
  description:
    "Portfolio of Ahmed Faaz Laeeq — Software Engineer specializing in scalable backend systems (FastAPI, Node.js, C# .NET, MS SQL Server) and autonomous Agentic AI pipelines (CrewAI, LangChain, AWS Bedrock). AD in Software Development (CGPA 3.88, Magna Cum Laude) & BS in FinTech (CGPA 3.87) from MAJU.",
  keywords: [
    "Ahmed Faaz Laeeq",
    "FaazDotDev",
    "Software Engineer",
    "Agentic AI Engineer",
    "Backend Engineer",
    "CrewAI",
    "AWS Bedrock",
    "LangChain",
    "Python",
    "FastAPI",
    "C# .NET Core",
    "MS SQL Server",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Ahmed Faaz Laeeq" }],
  openGraph: {
    title: "Ahmed Faaz Laeeq | Software Engineer & Agentic AI Specialist",
    description:
      "Software Engineer specializing in resilient backend architectures and autonomous Agentic AI systems. Actively seeking full-time roles.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="32" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
