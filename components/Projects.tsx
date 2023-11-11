import { data } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="wrapper">
        <SectionTitle
          title="Selected Works (2022 - 2023)"
          subtitle="Projects"
        />
      </div>

      <div className="flex flex-col">
        {data.map((project: any, index: number) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            index={index}
            title={project.title}
            image={project.image}
            live={project.live}
            front={project.front}
            back={project.back}
            full={project.full}
            duration={project.duration}
            color={project.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
