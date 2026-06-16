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
          className="page-transition-content"
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={`curtain-${pathname}`}
        className="page-transition-curtain"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 1.05,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </div>
  );
}