import { data } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="wrapper section-padding">
      <SectionTitle title="Selected Works (2022 - 2023)" subtitle="Projects" />
      {/* PROJECTS */}
      <div className="grid lg:grid-cols-2 gap-10 ">
        {data.map((project: any) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            tech={project.tech}
            live={project.live}
            front={project.front}
            back={project.back}
            full={project.full}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
