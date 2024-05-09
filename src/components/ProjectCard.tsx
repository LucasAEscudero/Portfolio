"use client";
import { TProject } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";
import { SiSwagger } from "react-icons/si";
import { motion } from "framer-motion";

interface Props {
  project: TProject;
  i: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ProjectCard({
  project: {
    title,
    image,
    resume,
    description,
    technologies,
    date,
    links: { github, deploy, youtube, swagger },
  },
  i,
}: Props) {
  return (
    <motion.article
      className="card m-3 rounded-md transition-all min-h-[250px] border-2 sm:flex"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 * i, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
    >
      <Image
        src={image}
        alt={`${title} - image`}
        width={300}
        height={100}
        className="rounded-t sm:rounded-l sm:rounded-t-none w-full sm:min-w-100 sm:max-w-100"
      />
      <div className="m-4 flex flex-col justify-around">
        <h2 className="text-2xl mb-2">{title}</h2>

        <p>{resume}</p>
        <ul className="flex gap-2 flex-wrap justify-center my-2">
          {technologies?.map((technology) => (
            <li
              key={`${title}-${technology}`}
              className="tag bg-stone-900 backdrop-blur-md rounded-full px-2"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <h5>{date}</h5>
          <div className="flex gap-2">
            <Link
              href={github}
              target="_blank"
              className="button"
              title="Repositorio"
            >
              <FaGithub size={25} />
            </Link>
            {youtube && (
              <Link
                href={youtube}
                target="_blank"
                className="button"
                title="Video de muestra"
              >
                <FaYoutube size={25} />
              </Link>
            )}
            {deploy && (
              <Link
                href={deploy}
                target="_blank"
                className="button flex items-center"
                title="Deploy"
              >
                <span className="mr-2 hidden md:inline-block">Deploy</span>
                <FaExternalLinkAlt size={18} />
              </Link>
            )}
            {swagger && (
              <Link
                href={swagger}
                target="_blank"
                className="button flex items-center"
                title="Swagger"
              >
                <span className="mr-2 hidden md:inline-block">Swagger</span>
                <SiSwagger size={23} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
