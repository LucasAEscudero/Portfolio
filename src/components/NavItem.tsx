"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import { SectionName } from "@/lib/types";

interface Props {
  name: SectionName;
  hash: string;
  activeSection: string;
  setActiveSection: (name: SectionName) => void;
}

export default function NavItem({
  name,
  hash,
  activeSection,
  setActiveSection,
}: Props) {
  return (
    <motion.li
      className="h-3/4 flex items-center justify-center my-1 relative"
      key={`${name}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      onClick={() => setActiveSection(name)}
    >
      <Link
        className={clsx(
          "flex w-full items-center justify-center px-3 py-1 text-white dark:text-[#656a70] dark:hover:text-white hover:text-black transition",
          {
            "dark:text-white text-black": activeSection === name,
          }
        )}
        href={hash}
      >
        {name}

        {name === activeSection && (
          <motion.span
            className="container rounded-full absolute inset-0 -z-10"
            layoutId="active"
            transition={{
              type: "spring",
              stiffness: 38,
              damping: 30,
            }}
          ></motion.span>
        )}
      </Link>
    </motion.li>
  );
}
