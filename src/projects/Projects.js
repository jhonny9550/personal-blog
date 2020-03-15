import React from 'react';
import mockedProjects from './projects.mock';
import Project from './Project';

const Projects = () => {
  return (
    <>
      {mockedProjects.map((p, i) => (
        <Project key={i} {...p} reversed={i % 2 !== 0} />
      ))}
    </>
  );
};

export default Projects;
