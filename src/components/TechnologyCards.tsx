import { TTechnology } from "@/lib/types";
import TechnologyCard from "./TechnologyCard";

type TechnologyCardsProps = {
  title: string;
  technologies: TTechnology[];
};

export default function TechnologyCards({
  title,
  technologies,
}: TechnologyCardsProps) {
  return (
    <article className="container my-3 p-3 md:w-[25rem] rounded">
      <h3 className="text-2xl text-center mb-2">{title}</h3>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {technologies?.map((technology: TTechnology, i: number) => (
          <TechnologyCard
            key={`${technology.name}-${i}`}
            technology={technology}
          />
        ))}
      </div>
    </article>
  );
}
