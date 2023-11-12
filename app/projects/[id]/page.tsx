import ProjectDetails from '@/components/ProjectDetails';
import { data } from '@/data/projects';
import { notFound } from 'next/navigation';

const ProjectDetailsPage = ({ params }: { params: { id: string } }) => {
  const project = data.find((project) => String(project.id) === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <main>
      <ProjectDetails project={project} />
    </main>
  );
};

export default ProjectDetailsPage;
