import React from 'react';
import ProjectCard from './ProjectCard';
import CardPill from './CardPill';
import projectData from '../projectData.json';

const CardsContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center m-3'>
      <h3 className='text-xl m-3 lg:hidden'>Work & Projects</h3>
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          cardTitle={project.title}
          cardURL={project.url}
          cardImage={project.image}
          imageAlt={project.alt}
          cardCopy={project.copy}
          cardPills={
            <>
              {Object.values(project.technologies).map((tech, index) => (
                <CardPill key={index} pillText={tech} />
              ))}
            </>
          }
        />
      ))}
    </div>
  );
};

export default CardsContainer;
