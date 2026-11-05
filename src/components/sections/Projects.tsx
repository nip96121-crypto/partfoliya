import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={t.projects.sectionTag}
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {projectsData.map((project) => (
            <Reveal key={project.id} delay={0.15}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
