"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CustomBtnProps {
  className: string;
  txt: string;
  href: string;
}

export default function CustomBtn({ className, txt, href }: CustomBtnProps) {
  return (
    <Link href={href}>
      <div
        className={`relative h-[60px] bg-gradient-to-r from-[#6c7fea] via-[#5eccff] to-[#4bff90] ${className}`}
      >
        <motion.button
          initial={{ right: "8px", bottom: "8px" }}
          whileHover={{ right: 0, bottom: 0 }}
          className={`absolute h-[60px] bg-black text-lg font-medium text-white ${className}`}
        >
          {txt}
        </motion.button>
      </div>
    </Link>
  );
}
