import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: {
    default: "Ahmed Faaz Laeeq | Entry-Level Software Engineer & Agentic AI Specialist",
    template: "%s | Ahmed Faaz Laeeq",
  },
  description:
    "Portfolio of Ahmed Faaz Laeeq — Software Engineer with Agentic AI expertise, actively seeking entry-level software engineering roles. AD in Software Development (CGPA 3.88, Magna Cum Laude) & BS in FinTech (CGPA 3.87) from MAJU. Verified Future AWS Agent Engineer Nanodegree.",
  keywords: [
    "Ahmed Faaz Laeeq",
    "FaazDotDev",
    "Entry-Level Software Engineer",
    "Junior Software Engineer",
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
    title: "Ahmed Faaz Laeeq | Entry-Level Software Engineer & Agentic AI Specialist",
    description:
      "Software Engineer with Agentic AI expertise actively seeking entry-level software engineering roles. AD in Software Development (CGPA 3.88) & BS in FinTech (CGPA 3.87).",
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
