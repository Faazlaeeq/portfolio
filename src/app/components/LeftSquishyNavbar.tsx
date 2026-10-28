"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";
import {
  Home,
  Bot,
  FolderGit2,
  BookOpen,
  User,
  Briefcase,
  Award,
  Star,
  Mail,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface NavSection {
  id: string;
  label: string;
  hint: string;
  icon: typeof Home;
  href: string;
}

const SECTIONS: NavSection[] = [
  {
    id: "hero",
    label: "Home",
    hint: "Software Engineer & Autonomous AI",
    icon: Home,
    href: "/#hero",
  },
  {
    id: "credentials",
    label: "Credentials",
    hint: "MAJU Degrees & Udacity Nanodegrees",
    icon: Award,
    href: "/#credentials",
  },
  {
    id: "services",
    label: "Services",
    hint: "Agentic AI, Backends & Systems",
    icon: Bot,
    href: "/#services",
  },
  {
    id: "projects",
    label: "Projects",
    hint: "Case Studies & Live Systems",
    icon: FolderGit2,
    href: "/projects",
  },
  {
    id: "articles",
    label: "Articles",
    hint: "Technical Deep Dives & Guides",
    icon: BookOpen,
    href: "/articles",
  },
  {
    id: "about",
    label: "About",
    hint: "Engineering Story & Work History",
    icon: User,
    href: "/#about",
  },
  {
    id: "testimonials",
    label: "Reviews",
    hint: "100% 5.0-Star Upwork Endorsements",
    icon: Star,
    href: "/#testimonials",
  },
  {
    id: "contact",
    label: "Contact",
    hint: "Book a Discovery Call",
    icon: Mail,
    href: "/contact",
  },
];

export default function LeftSquishyNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Scroll velocity for jelly/squish deformation
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    stiffness: 300,
  });

  // Calculate squish stretch: stretch Y when scrolling fast, compress X
  const scaleY = useTransform(smoothVelocity, [-2000, 0, 2000], [1.14, 1, 1.14]);
  const scaleX = useTransform(smoothVelocity, [-2000, 0, 2000], [0.92, 1, 0.92]);

  // Determine active section via IntersectionObserver when on the homepage
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.includes("/projects")) setActiveSection("projects");
      else if (pathname.includes("/articles")) setActiveSection("articles");
      else if (pathname.includes("/contact")) setActiveSection("contact");
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry with the highest intersection ratio
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by greatest intersection ratio
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topId = visibleEntries[0].target.id;
        if (topId) setActiveSection(topId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -40% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    });

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Calculate the upcoming "hint" section
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const nextSectionIndex =
    currentIndex >= 0 && currentIndex < SECTIONS.length - 1
      ? currentIndex + 1
      : 0; // loops back to top if at end
  const nextSection = SECTIONS[nextSectionIndex];

  const handleNavigate = (section: NavSection) => {
    if (pathname === "/") {
      if (section.href.startsWith("/#") || section.href.startsWith("#")) {
        const id = section.id;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          setActiveSection(id);
          return;
        }
      }
    }
    router.push(section.href);
  };

  return (
    <aside
      aria-label="Side Navigation"
      className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3"
    >
      {/* Squishy Bubble Rail Container */}
      <motion.nav
        style={{ scaleY, scaleX }}
        className="relative flex flex-col items-center gap-1.5 rounded-full border border-neutral-800/80 bg-black/80 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-shadow duration-300 hover:border-neutral-700/80"
      >
        {SECTIONS.map((section, idx) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          const isNext = nextSection.id === section.id && !isActive;

          return (
            <div
              key={section.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <motion.button
                type="button"
                onClick={() => handleNavigate(section)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.88 }}
                className={`relative flex size-10 items-center justify-center rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : isNext
                    ? "text-emerald-300/80 hover:text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
                aria-label={`Navigate to ${section.label}`}
              >
                {/* Squishy Active Bubble Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="squishyBubbleIndicator"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 24,
                      mass: 0.6,
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/25 via-emerald-500/30 to-emerald-400/20 border border-emerald-400/70 shadow-[0_0_18px_rgba(75,255,144,0.35)]"
                  />
                )}

                <Icon className="relative z-10 size-4 transition-transform duration-200" />

                {/* Subtle pulse dot on the upcoming section */}
                {isNext && (
                  <span className="absolute -right-0.5 top-1 flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
                  </span>
                )}
              </motion.button>

              {/* Hover Tooltip / Hint */}
              <AnimatePresence>
                {hoveredSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.9 }}
                    animate={{ opacity: 1, x: 16, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="pointer-events-none absolute left-full z-50 whitespace-nowrap rounded-xl border border-neutral-800 bg-neutral-950/90 px-3.5 py-2 shadow-2xl backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">
                        {section.label}
                      </span>
                      {isActive && (
                        <span className="rounded-full bg-emerald-950/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-800/80">
                          Current
                        </span>
                      )}
                      {isNext && (
                        <span className="rounded-full bg-blue-950/80 px-2 py-0.5 text-[10px] font-semibold text-blue-400 border border-blue-800/80">
                          Up Next
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      {section.hint}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.nav>

      {/* Dynamic Hint Bubble: Shows What's Coming Next */}
      <AnimatePresence mode="wait">
        <motion.button
          key={nextSection.id}
          type="button"
          onClick={() => handleNavigate(nextSection)}
          initial={{ opacity: 0, y: 8, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.92 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="group relative flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-neutral-950/85 px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all hover:border-emerald-400 hover:bg-neutral-900"
          title={`Jump to next section: ${nextSection.label}`}
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400"></span>
          </span>
          <span className="text-[11px] font-medium text-neutral-300 group-hover:text-white">
            Next: <span className="font-bold text-emerald-400">{nextSection.label}</span>
          </span>
          <ChevronDown className="size-3 text-emerald-400 transition-transform duration-300 group-hover:translate-y-0.5" />
        </motion.button>
      </AnimatePresence>
    </aside>
  );
}
