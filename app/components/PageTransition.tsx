"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import "./PageTransition.css";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="page-transition-root">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="page-slide"
          initial={{
            x: "100%",
            scale: 0.89,
            borderRadius: 46,
            opacity: 1,
          }}
          animate={{
            x: 0,
            scale: 1,
            borderRadius: 0,
            opacity: 1,
          }}
          exit={{
            x: "-100%",
            scale: 0.89,
            borderRadius: 46,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}