"use client";
import { useEffect } from "react";
import { TProject } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import projects from "@/lib/projects.json";

import ProjectCard from "./ProjectCard";
import Title from "./Title";

export default function Projects() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActiveSection("Proyectos");
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="my-3 md:mx-[125px] md:!scroll-mt-[5rem] !scroll-mt-[7.5rem]"
      id="projects"
    >
      <Title text="Proyectos" marginBottom={3} />
      <div className="grid grid-cols-1 items-start gap-3 mt-2">
        {projects?.map((project: TProject, i: number) => (
          <ProjectCard key={`${project.title}-${i}`} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
