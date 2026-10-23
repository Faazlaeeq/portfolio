"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children: ReactNode;
  className?: string;
  to?: string;
};

export default function FadeUp({ tag: Tag, children, className, to }: Props) {
  const router = useRouter();

  const handleNavigation = function () {
    if (to) {
      router.push(to);
    }
  };

  return (
    <Tag
      className={className}
      onClick={to ? handleNavigation : undefined}
    >
      {children}
    </Tag>
  );
}
